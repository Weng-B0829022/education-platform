export const BASE_URL = 'http://163.25.111.55:8000'

export const ENDPOINTS = {
    gen_video: `${BASE_URL}/storyboard/execute-generate-video`,
    gen_storyboard: `${BASE_URL}/generator/execute-generate-storyboard`,
    get_generated_video: `${BASE_URL}/storyboard/get-generated-video`,
    upload_video: `${BASE_URL}/storyboard/execute-news-upload`,
}
