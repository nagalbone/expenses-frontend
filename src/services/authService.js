import api from "./api";

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me");

    return {
      success: true,
      data: response.data.user,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Authentication failed",
    };
  }
};

export const logoutUser = async () => {
  try{
    const response = await api.post("/auth/logout");
  if (response.success) {
    return response.data;
  }
  }catch(error){
    console.log(error);
  }
    
};