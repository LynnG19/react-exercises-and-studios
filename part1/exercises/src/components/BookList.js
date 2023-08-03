export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://www.google.com/aclk?sa=l&ai=DChcSEwj29OfpwcGAAxUSbUwKHf0TAnUYABAFGgJvYQ&ase=2&sig=AOD64_0GluF6kajjH8rb8iIpbQOPwR_NuQ&ctype=5&nis=5&adurl&ved=2ahUKEwisqNjpwcGAAxXkNN4AHSenDa8Qvhd6BAgBEGc";
   let book2 = "";
   let book3 = "";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Lies My Teacher Told Me,' And How American History Can Be Used As A Weapon by James W. Loewen" />
         <img src={book2} alt="Debt of Bones by Terry Goodkind" />
         <img src={book3} alt="Founding Fubu by Daymond John" />
      </div>      
   );
}