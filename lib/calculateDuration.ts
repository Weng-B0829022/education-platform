export function calculateDuration(timeString: string): number {
    timeString = timeString.replace(/\s/g, '');
    const [startTime, endTime] = timeString.split('-->');
    
    function timeToMilliseconds(t: string): number {
        const [time, ms] = t.split(',');
        const [h, m, s] = time.split(':');
        return parseInt(h) * 3600000 + parseInt(m) * 60000 + parseInt(s) * 1000 + parseInt(ms);
    }
    
    const startMs = timeToMilliseconds(startTime);
    const endMs = timeToMilliseconds(endTime);
    
    return endMs - startMs;
} 