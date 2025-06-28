// Uses fetch for download/upload speed and latency estimation
const startBtn = document.getElementById('start-btn');
const results = document.getElementById('results');
const downloadElem = document.getElementById('download-speed');
const uploadElem = document.getElementById('upload-speed');
const latencyElem = document.getElementById('latency');

async function measureLatency() {
    const url = "https://ipv4.icanhazip.com/"; // Lightweight, fast
    const times = [];
    for(let i = 0; i < 5; i++) {
        const start = performance.now();
        try {
            await fetch(url, {cache: "no-store", mode: "cors"});
            const end = performance.now();
            times.push(end - start);
        } catch (e) {
            times.push(999);
        }
    }
    // median
    times.sort((a, b) => a - b);
    return Math.round(times[Math.floor(times.length/2)]);
}

async function measureDownloadSpeed() {
    // 5MB file, public CDN
    const fileUrl = "https://speed.hetzner.de/5MB.bin";
    const fileSizeBytes = 5 * 1024 * 1024;
    const start = performance.now();
    try {
        await fetch(fileUrl, {cache: "no-store", mode: "cors"});
        const end = performance.now();
        const duration = (end - start) / 1000; // seconds
        const speedMbps = (fileSizeBytes * 8 / duration) / 1_000_000;
        return speedMbps.toFixed(2);
    } catch (e) {
        return "Error";
    }
}

async function measureUploadSpeed() {
    // Use a public echo server for test
    const url = "https://httpbin.org/post";
    const data = new Uint8Array(1 * 1024 * 1024); // 1MB
    const start = performance.now();
    try {
        await fetch(url, {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/octet-stream"
            }
        });
        const end = performance.now();
        const duration = (end - start) / 1000; // seconds
        const speedMbps = (data.length * 8 / duration) / 1_000_000;
        return speedMbps.toFixed(2);
    } catch (e) {
        return "Error";
    }
}

async function runTest() {
    startBtn.disabled = true;
    startBtn.textContent = "🌽 Testing...";
    results.classList.remove('hidden');
    downloadElem.textContent = uploadElem.textContent = latencyElem.textContent = "...";

    const [latency, download, upload] = await Promise.all([
        measureLatency(),
        measureDownloadSpeed(),
        measureUploadSpeed()
    ]);
    downloadElem.textContent = download;
    uploadElem.textContent = upload;
    latencyElem.textContent = latency;

    startBtn.disabled = false;
    startBtn.textContent = "🌽 Start Test";
}

startBtn.addEventListener('click', runTest);
