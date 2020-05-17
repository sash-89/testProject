import * as axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "bf5cde36-0ad1-431b-b648-ca0a74404451"
}
});

export const LoginAPI = {
    me : async()=> {
        const response = await instance(`auth/me`);
        return response.data;
    },
    login : async(email, password, rememberMe, captcha)=> {
        const response = await instance.post(`/auth/login/`, {email, password, rememberMe, captcha});
        return response.data;
    },
    logout : async()=> {
        const response = await instance.delete(`/auth/login`);
        return response.data;
    },
    captcha : async()=> {
        const response = await instance(`/security/get-captcha-url`);
        return response.data;
    },

};



export const userAPI = {
    getUsers : async(pageSize, currentPage)=> {
        const response = await instance(`users?count=${pageSize}&page=${currentPage}`)
        return  response.data;
    },

    searchUsers : async(pageSize, currentPage, userName)=> {
        const response = await instance(`users?term=${userName}&count=${pageSize}&page=${currentPage}`)
        return  response.data;
    },
    followUser:  async(userId,)=> {
        const response = await instance.post(`follow/${userId}`);
        return  response.data;
    },
    unfollowUser:  async(userId,)=> {
        const response = await instance.delete(`follow/${userId}`);
        return  response.data;
    },
};

export const ProfileAPI = {
    getProfile: async(userId, id)=> {
    const response = await instance(`profile/${!userId ? id : userId}`);
    return response.data;
},
    getUserStatus:  async(userId, id)=> {
        const response = await instance(`profile/status/${!userId ? id : userId}`);
        return response.data;
    },
    setUserStatus:   async(statusText)=> {
        const response = await instance.put(`profile/status/`, {status: statusText});
        return response.data;
    },
    loadPhoto:   async(photoFile)=> {
        const formData = new FormData();
        formData.append("image", photoFile);
        const response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    setUserProfileInfo:  async(profile)=> {
            try{
                const response = await instance.put(`profile/`, profile);
                return response
            }catch(error){
                if (error.response) {
                    return error.response
                }
            }

    }
};

export const WeatherAPI = async()=> {
   const response = await axios(`http://api.openweathermap.org/data/2.5/weather?q=Gyumri,AM&lang=ru&units=metric&appid=3314058b74c9d5011c14a6796a9340df`)
   return response.data;
};


class BooksAPI {
    constructor() {
        this.getBooks = this.getBooks.bind(this)
        this.getAuthors = this.getAuthors.bind(this)
        this.getCoverPhotos = this.getCoverPhotos.bind(this)
    }

      bookInstance = axios.create({
            baseURL: "https://fakerestapi.azurewebsites.net/",
        });


    async getBooks(payload) {
        const response = await this.bookInstance(`api/${payload}`);
        return response.data;
    }
    async getAuthors() {
        const response = await this.bookInstance(`api/Authors`);
        return response.data;
    }
    async getCoverPhotos() {
        const response = await this.bookInstance(`api/CoverPhotos`);
        return response.data;
    }
}

export const fetchBooks = new BooksAPI();