#### remove duplicate from the arrays

       let arr = ["a", "b", "a", "c"];
        let remove = function(){
            return [...new Set(arr)]
         }

- arrow functions
- spread operator

               let remove = () => [...new Set(arr)];
               console.log(remove());

              let arr = ["a", "b", "a", "c"];
              let remove = () => {
                return arr.filter((item, pos) => {
                  return arr.indexOf(item) == pos;
                });
              };

                console.log(remove());
