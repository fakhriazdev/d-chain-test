import axiosInstance from '../api/axiosInstance';

const RegionService = () => {
    const fetchProvince = async () => {
        const {data} = await axiosInstance.get(`/api/provinces.json`);
        return data;

    }

    return {
        fetchProvince,
    }
}

export default RegionService;