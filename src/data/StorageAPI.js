import Network from "./Network";


// 이 파일은 수정할 필요 없습니다. 밖에서 import 해서 쓰시면 됩니다.
export default class StorageAPI{

    static instance = new StorageAPI();

    // image_id 를 넘기면 base64 형태의 이미지가 반환됩니다.
    downloadB64 = (fileId) => {
        return Network.instance.post({
            module_name: 'cloud.storage.download_b64',
            file_id: fileId,
        })
    };

}
