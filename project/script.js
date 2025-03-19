let currentPhotoIndex = 0;
const photos = [
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/20487.jpg', caption: `"Fullmetal Alchemist: Brotherhood" follows the alchemist brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone after a failed attempt to resurrect their mother, which results in them losing their bodies` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/21477.png', caption: `Hunter x Hunter follows Gon Freecss's journey to become a Hunter 
  a licensed professional who undertakes fantastical pursuits, and find his father, 
  a legendary Hunter who left him at a young age.` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/21418.jpg', caption: `Berserk" is a dark fantasy manga series by Kentaro Miura that follows Guts, a mercenary warrior, 
  as he battles against his grim fate and the supernatural forces that haunt him, 
  seeking revenge and to save his lover` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/20822.png', caption: `Naruto: Shippuden" follows the teenage ninja Naruto Uzumaki and his allies as they face a greater threat, 
  the Akatsuki organization, and the looming Fourth Shinobi World War.` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/21049.jpg', caption: `Kafka Hibino, a regular guy who cleans up after Kaiju attacks, unexpectedly gains the ability to transform into a Kaiju himself, 
  becoming "Kaiju No. 8," and he strives to join the Defense Force to fight alongside his childhood friend, Mina Ashiro.` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/21091.png', caption: `follows Momo Ayase, who believes in spirits, and Okarun, a UFO fanatic, 
  as they initially argue over the existence of supernatural beings but end up proving each other 
  right through paranormal battles and a blossoming romance.` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/21513.jpg', caption: `One-Punch Man" follows Saitama, a superhero who can defeat any enemy with a single punch, 
  leading him to a life of boredom and a search for a worthy opponent.` },
  { src: 'https://4kwallpapers.com/images/walls/thumbs_3t/21530.png', caption: `The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to 
  eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.` },
];


// Get the modal
function openModal(index) {
  currentPhotoIndex = index;
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');

  modalImage.src = photos[index].src;
  modalCaption.textContent = photos[index].caption;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function changePhoto(direction) {
  currentPhotoIndex += direction;
  if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
  if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;

  const modalImage = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');

  modalImage.src = photos[currentPhotoIndex].src;
  modalCaption.textContent = photos[currentPhotoIndex].caption;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
