// src/constants.js
const packetStructure = {
    handlerId: null,          // 핸들러 ID (int 타입)
    userId: null,            // 사용자 ID (int 타입)
    clientVersion: '',       // 클라이언트 버전 (string 타입)
    payload: {}              // 페이로드 (JSON 타입)
};

module.exports = packetStructure;
