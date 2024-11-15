export const fetchData = async () => {
    const response = await fetch('http://163.25.111.55:8000/api');
    if (!response.ok) {
        throw new Error('獲取數據失敗');
        }
        return response.json();
    };