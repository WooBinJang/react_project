import axios from "axios/index"


// 이 파일은 수정할 필요 없으며. 밖에서 import 할 필요도 없습니다.
export default class Network {

    API = null;
    static instance = new Network();

    constructor(props) {
        this.API = axios.create({
            baseURL: this.getBaseUrl(),
        });
    }

    getBaseUrl = () => {
        // 왓섭의 테스트용 URL
        return 'https://7w6ojwzgh4.execute-api.ap-northeast-2.amazonaws.com/prod_aws_interface/agDod3LMQKPxwd4e5ymTr9';
    };

    post = (data) => {
        return new Promise(resolve => {
            this.API.post('/', data).then((response) => {
                resolve(response.data);
            })
        })
    }

}
