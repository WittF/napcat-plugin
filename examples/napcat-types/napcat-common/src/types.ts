export type QQPackageInfoType = {
    version: string;
    buildVersion: string;
    platform: string;
    eleArch: string;
};
export type QQVersionConfigType = {
    baseVersion: string;
    curVersion: string;
    prevVersion: string;
    onErrorVersions: Array<unknown>;
    buildId: string;
};
export type QQAppidTableType = {
    [key: string]: {
        appid: string;
        qua: string;
    };
};
export interface Peer {
    chatType: number;
    peerUid: string;
    guildId?: string;
}
export interface QQLevel {
    crownNum: number;
    sunNum: number;
    moonNum: number;
    starNum: number;
}
