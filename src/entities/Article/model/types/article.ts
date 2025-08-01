import { User } from 'entities/User';
import { AcrticleBlockType, ArticleType } from '../consts/articleConsts';

export interface ArticleBlockBase {
    id: string;
    type: AcrticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: AcrticleBlockType.CODE;
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: AcrticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: AcrticleBlockType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock | ArticleCodeBlock

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
