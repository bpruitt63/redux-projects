import axios from "axios";

const BASE_URL = "http://localhost:5000/api/posts";


class MicroblogApi {

    static async getPosts() {
        try {
            const res = await axios.get(BASE_URL);
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async getPost(id) {
        try {
            const res = await axios.get(`${BASE_URL}/${id}`);
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async newPost(data) {
        try {
            const res = await axios.post(BASE_URL, data)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async editPost(id, data) {
        try {
            const res = await axios.put(`${BASE_URL}/${id}`, data)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async deletePost(id) {
        try {
            const res = await axios.delete(`${BASE_URL}/${id}`)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async getComments(id) {
        try {
            const res = await axios.get(`${BASE_URL}/${id}/comments`)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async newComment(postId, comment) {
        try {
            const res = await axios.post(`${BASE_URL}/${postId}/comments`, comment)
            console.log(res)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async deleteComment(postId, commentId) {
        try {
            const res = await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };

    static async vote(postId, direction) {
        try {
            const res = await axios.post(`${BASE_URL}/${postId}/vote/${direction}`)
            return res.data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message;
            !e.response ? message = "Server error, please try again later"
                : message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };
   
};

export default MicroblogApi;