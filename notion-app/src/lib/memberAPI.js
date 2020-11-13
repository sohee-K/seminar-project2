import axios from 'axios';

const url = 'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

async function getMemberAPI() {
    try {
        const { data } = await axios.get(url);
        console.log('[SUCCESS] GET MEMBERS', data.data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET MEMBERS', e);
    }
}

export {
    getMemberAPI,
};