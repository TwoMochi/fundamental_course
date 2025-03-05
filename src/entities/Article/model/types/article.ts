export enum AcrticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

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

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string ;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
