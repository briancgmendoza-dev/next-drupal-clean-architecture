"use server"

const admin = { username: 'brian', password: 'mendoza' };

export const login = async (formData: FormData) => {
  try {
    const data = Object.fromEntries(formData.entries())
    const { username, password } = data;

    if(username === admin.username && password === admin.password) {
      return { success: true }
    } else {
      return { success: false, message: "Invalid credentials" }
    }
  } catch (error) {
    console.log("Login Error: ", error)
  }
}
