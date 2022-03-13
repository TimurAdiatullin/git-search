let state = {
   newInputText: "",
   defaultPage: "home",
   dataUser: {},
};

export const updateNewPostText = (newText) => {
   //функция для обновления input в myPosts
   state.newInputText = newText;
   rerenderEntireTree(state);
};

export async function dataForm(name) {
   let githubUser = await (
      await fetch(`https://api.github.com/users/${name}`)
   ).json();
   let githubUserRepos = await (
      await fetch(`https://api.github.com/users/${githubUser.login}/repos`)
   ).json();
   let githubUserFollowing = await (
      await fetch(`https://api.github.com/users/${githubUser.login}/following`)
   ).json();

   return {
      login: githubUser.login,
      avatar: githubUser.avatar_url,
      underLogin: name,
      repos: githubUserRepos.map((item) => {
         return {
            title: item.name,
            status() {
               if (item.private == false) {
                  return "Public";
               } else if (item.private == true) {
                  return "Private";
               }
            },
            url: item.html_url,
            language: item.language,
         };
      }),
      following: githubUserFollowing.map((item) => {
         return {
            login: item.login,
            avatar: item.avatar_url,
         };
      }),
   };
}

export const data = () => {
   rerenderEntireTree(state);
};

export default state;
