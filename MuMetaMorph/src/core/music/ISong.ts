﻿import { SongMetadata } from "./SongMetadata";

export interface ISong {
    songId?: number;
    name: string;
    pluginsUsed: string[];
    listImageUrl?: string;
    bannerImageUrl?: string;
    audioStreamUrl: string;
    dateReleased: Date;
    additionalMetadata?: SongMetadata[];
}