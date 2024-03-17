// 1.  data fetch from api using async-await & try-catch
async function getAllUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log("Error : ", error);
    }
}
//call function
// getAllUsers();



//2. using .then() method
fetch('https://api.github.com/users/Diptamoy-Mitra')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error : ", error);
})




```
  //Output
{
    login: 'Diptamoy-Mitra',
    id: 91617575,
    node_id: 'U_kgDOBXX5Jw',
    avatar_url: 'https://avatars.githubusercontent.com/u/91617575?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Diptamoy-Mitra',
    html_url: 'https://github.com/Diptamoy-Mitra',
    followers_url: 'https://api.github.com/users/Diptamoy-Mitra/followers',
    following_url: 'https://api.github.com/users/Diptamoy-Mitra/following{/other_user}',
    gists_url: 'https://api.github.com/users/Diptamoy-Mitra/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Diptamoy-Mitra/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Diptamoy-Mitra/subscriptions',
    organizations_url: 'https://api.github.com/users/Diptamoy-Mitra/orgs',
    repos_url: 'https://api.github.com/users/Diptamoy-Mitra/repos',
    events_url: 'https://api.github.com/users/Diptamoy-Mitra/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Diptamoy-Mitra/received_events',
    type: 'User',
    site_admin: false,
    name: 'Diptamoy Mitra',
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: null,
    bio: 'Seeking an entry-level opportunity with an esteemed organization where i can utilize my skills and\r\n' +
      'enhanced learning in the field of work. ',
    twitter_username: null,
    public_repos: 117,
    public_gists: 0,
    followers: 27,
    following: 99,
    created_at: '2021-09-29T14:37:42Z',
    updated_at: '2024-03-02T13:19:18Z'
  }

```