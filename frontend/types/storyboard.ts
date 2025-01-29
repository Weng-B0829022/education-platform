export interface Article {
  title: string;
  content: string;
  storyboard: string;
}
export interface GenerationResult {
  message: string;
  image_urls: string[];
  random_id: string;
} 
export interface GeneratedContent {
  articles: Article[];
}

export interface Scene {
  段落: string;
  秒數: string;
  畫面: string;
  畫面描述: string;
  旁白: string;
  字數: string;
}

export interface StoryboardProps {
  storyboardData: Scene[];
  storyboardTitle: string;
  selectedIndex: number;
}

export interface StoryboardJsonScene {
  sceneNumber: number;
  timeCode: string;
  visualElements: { type: string; content: string; }[];
  voiceoverText: string;
}

export interface StoryboardJson {
  title: string;
  content: string;
  storyboard: StoryboardJsonScene[];
} 