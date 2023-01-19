async function getUsers() {
    const url = 'https://reqres.in/api/users?page=1';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (e) {
        console.error(e);
    }
}

export default getUsers;