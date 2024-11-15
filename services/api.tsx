export const fetchData = async () => {
    const response = await fetch('http://localhost:8001/api');
    if (!response.ok) {
        throw new Error('獲取數據失敗');
        }
        return response.json();
    };