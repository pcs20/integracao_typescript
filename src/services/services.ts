import request from 'request';

class Services {

    public teste(callback: Function) {
        request
            .get('http://localhost:4001/teste', async (err, res, body) => {
                let error: boolean = false;
                if (err) { 
                    //console.error('[http://localhost:4001/teste] ocorreu um error: ', err);
                    error = true;
                }
                return callback(error, res, body);
            })
    }

}

export default Services;