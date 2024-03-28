// Code will be tested with different roles and movies
let movie = { 
   title: "Pirates of the Caribbean: At World's End",
   director: "Gore Verbinski",
   composer: "Hans Zimmer",
   roles: [ // Roles are stored in order of appearance
      "Jack Sparrow",
      "Will Turner",
      "Elizabeth Swann",
      "Hector Barbossa"
   ],
 orderOfAppearance: function(role) {
         for (let i = 0; i < this.roles.length; i++) {
            if (this.roles[i] === role) {
               return i + 1;
            }
         }
         return 0;
   };
};