function requestUserRepos(username){
    metaDic={0: "login", 1: "id", 2: "node_id", 3: "avatar_url", 4: "gravatar_id", 5: "url",
             6: "html_url", 7: "followers_url", 8: "following_url", 9: "gists_url", 10: "starred_url",
             11: "subscriptions_url", 12: "organizations_url", 13: "repos_url", 14: "events_url",
             15: "received_events_url", 16: "type", 17: "site_admin", 18: "name", 19: "company",
             20: "blog", 21: "location", 22: "email", 23: "hireable", 24: "bio", 25: "twitter_username", 
             26: "public_repos", 27: "public_gists", 28: "followers", 29: "following", 30: "created_at", 
             31: "updated_at"};
    // WebSite, bio,followers,forks,twitter,company,email,location,
    const xhr=new XMLHttpRequest();
    const url=`https://api.github.com/users/${username}`;
    xhr.open('GET',url,true);
    xhr.onload=function(){
        const data=JSON.parse(this.response);
        // console.log(data);
        var j=0;
        for(var i in data){
            
        }
        // console.log(MetaData);
        console.log(metaDic);
    }
    xhr.send();
}
class User{
    metaDic={0: "login", 1: "id", 2: "node_id", 3: "avatar_url", 4: "gravatar_id", 5: "url",
             6: "html_url", 7: "followers_url", 8: "following_url", 9: "gists_url", 10: "starred_url",
             11: "subscriptions_url", 12: "organizations_url", 13: "repos_url", 14: "events_url",
             15: "received_events_url", 16: "type", 17: "site_admin", 18: "name", 19: "company",
             20: "blog", 21: "location", 22: "email", 23: "hireable", 24: "bio", 25: "twitter_username", 
             26: "public_repos", 27: "public_gists", 28: "followers", 29: "following", 30: "created_at", 
             31: "updated_at"};

    constructor(UserName)
    {
        this.UserName=UserName;
        this.Data=getData(this.username);
        // fetch
        // const o=this;
        // const xhr=new XMLHttpRequest();
        // const url=`https://api.github.com/users/${this.UserName}`;
        // fetch(url).then(function(response) {
        //     this.Data=response.json()
        // });

        // xhr.open('GET',url,true);
        // xhr.onload=function()
        // {
        //     const data=JSON.parse(this.response);
        // }.then(function(){
        //     this.Data=data;
        // })
        // xhr.send();

    }
    getName(){
        return this.Data;
    }

}
// u=new User('AshwinSolanki76');
// console.log(u.getName());
// console.log(u.getName());


  
// Defining async function 
async function getData(Username) { 
    const url =`https://api.github.com/users/${Username}`; 
    const response = await fetch(url);
    // Storing data in form of JSON 
    var data = await response.json(); 
    // console.log(data); 
    return data;
    // show(data); 
} 
// Calling that async function 
d=getData('AshwinSolanki76')
console.log(d)
  
// Function to hide the loader 