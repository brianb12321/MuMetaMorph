﻿import Dexie from "dexie";
import { ILogger } from "../../logging/ILogger";
import { ISong } from "../../music/ISong";
import { IBlobResource } from "../../resourceSystem/IBlobResource";
import { ConfigurationObject } from "../ConfigurationObject";

export class MMMConfigurationDatabase extends Dexie {
    configuration: Dexie.Table<ConfigurationObject, number>;
    song: Dexie.Table<ISong, number>;
    blob: Dexie.Table<IBlobResource, number>;
    constructor(private logger: ILogger) {
        super("MMConfigurationDatabase");
        this.logger.log("Configuring the database...");
        this.version(1).stores({
            configuration: "++Id, &Name, Value",
            song: "++songId, name, listImageUrl, bannerImageUrl, dateReleased, audioStreamUrl, additionalMetadata",
            blob: "++blobId, blobName, blobType, blobData"
        });
    }
}