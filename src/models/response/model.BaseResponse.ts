
export default class BaseResponse {
    public response = {
        rd: "",
        rc: 1,
        data: {},
    }


    public setSuccess = (data: object) => {
        this.response.rd = "Request success";
        this.response.rc = 1;
        this.response.data = data;
    }

    public setError = (rd: string) => {
        this.response.rd = rd;
        this.response.rc = -1;
    }
}