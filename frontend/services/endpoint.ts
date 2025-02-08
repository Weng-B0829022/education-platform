export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
console.log(BASE_URL)
export const ENDPOINTS = {
    gen_video: `${BASE_URL}/storyboard/execute-generate-video`,
    gen_storyboard: `${BASE_URL}/generator/execute-generate-storyboard`,
    get_generated_video: `${BASE_URL}/storyboard/get-generated-video`,
    upload_video: `${BASE_URL}/storyboard/execute-news-upload`,
}
