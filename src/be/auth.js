import { mockUsers } from "../data/mockUser";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const SESION_KEY = "dnd.build";

const publicUser = ({ password, ...user }) => user;

export async function login(usern, password){
    await wait(400);

    const user = mockUsers.find((u) => (u.password === password && u.username.toLowerCase() === usern.toLowerCase()));

    if(!user) throw new Error("Wrong username or password");

    localStorage.setItem(SESION_KEY, user.id);
    return publicUser(user);
}

export async function signup(usern, email, password) {
    await wait(400);

    if(mockUsers.some((u) => (u.username.toLowerCase() === usern.toLowerCase()))) throw new Error("Username already taken");
    if(mockUsers.some((u) => (u.email.toLowerCase() === email.toLowerCase()))) throw new Error("Email already registered");

    const user = {
        id : mockUsers.length + 1, 
        usern, 
        email, 
        password, 
    };
    mockUsers.push(user);
    localStorage.setItem(SESION_KEY, user.id);
    return publicUser(user);
}

export async function logout(){
    localStorage.removeItem(SESION_KEY);
}

export async function getCurrentUser(){
    const id = Number(localStorage.getItem(SESION_KEY))
    const currentUser = mockUsers.find((u) => (u.id === id));
    return currentUser ? publicUser(currentUser) : null;
}