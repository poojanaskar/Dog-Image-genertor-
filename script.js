document.addEventListener('DOMContentLoaded', function() {
              let dogImage = document.querySelector('#dogImage'); // Ensure you're selecting by id
              let click = document.querySelector('#click');
              let Image;
          
            
                  click.addEventListener('click', () => {
                            fetch('https://dog.ceo/api/breeds/image/random')
                            .then((response) => response.json())
                            .then((json) => {
                              console.log('got the data');
                              Image = json.message;
                              console.log(Image);
                              dogImage.src = json.message; // Set the image source
                          
                        });
                });
          
              
          });