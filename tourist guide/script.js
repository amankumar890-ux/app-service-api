
const statesData = {
    delhi: {
        name: "Delhi",
        description: "The heart of India, a blend of history and modernity",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
        places: [
            {
                name: "Red Fort",
                type: "famous",
                description: "Historic 17th-century fort complex, a UNESCO World Heritage site built by Mughal Emperor Shah Jahan. The massive red sandstone walls enclose palaces, mosques, and gardens.",
                image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Red+Fort+Delhi"
            },
            {
                name: "India Gate",
                type: "famous",
                description: "42-meter tall war memorial dedicated to 70,000 soldiers who died in World War I. Located in the heart of New Delhi with beautiful gardens around it.",
                image: "https://images.unsplash.com/photo-1597059171946-0312dd3ea4f7?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=India+Gate+Delhi"
            },
            {
                name: "Agrasen Ki Baoli",
                type: "hidden",
                description: "A stunning 60-meter long and 15-meter wide ancient stepwell, believed to be built during the Mahabharat era. This hidden architectural marvel features 108 steps and is a photographer's paradise.",
                image: "https://media.istockphoto.com/id/1295486463/photo/well-in-famous-agrasen-ki-baoli-of-x-century-in-delhi-fine-architecture-of-ancient-times.webp?a=1&b=1&s=612x612&w=0&k=20&c=GaH1pguim822p_4uR2tWypDoAQU2c8PYdOsl1VIlQQk=",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Agrasen+Ki+Baoli+Delhi"
            },
            {
                name: "Hauz Khas",
                type: "hidden",
                description: "Long before cafes arrived, Alaudin Khilji dug a massive reservoir referred to as the Hauz-i-Alai to provide water for his capital of Siri (14th century). A few years later, Firoz Shah Tughlaq restored it and constructed a madrasa (a college for Islamic instruction) and his tomb beside the lake..",
                image: "https://realitytoursandtravel.com/wp-content/uploads/2025/09/steptodown.com571573-1024x684.jpg",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Sanjay+Van+Delhi"
            }
        ],
        food: [
            {
                name: "Paranthe Wali Gali",
                description: "Famous narrow lane in Old Delhi serving 25+ varieties of stuffed parathas since 1872",
                location: "Chandni Chowk, Old Delhi",
                bestTime: "Morning 8 AM - 11 AM",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8L6RIQwVXwkdy9VTPU3MuD5ZiSubP4R05w&s"
            },
            {
                name: "Chole Bhature",
                description: "Spicy chickpea curry with deep-fried fluffy bread - Delhi's ultimate comfort food",
                location: "Bengali Market, Karol Bagh",
                bestTime: "Morning 9 AM - 12 PM",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZSG1vam9-a_ijXGT2HBYPaBzf7hF0FdTMA&s"
            }
        ]
    },
    
    banaras: {
        name: "Banaras (Varanasi)",
        description: "The spiritual capital of India, oldest living city in the world",
        image: "https://images.unsplash.com/photo-1717323821798-8cee2f6826ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYXJhc3xlbnwwfHwwfHx8MA%3D%3D",
        places: [
            {
                name: "Dashashwamedh Ghat",
                type: "famous",
                description: "The most spectacular ghat in Varanasi where the famous Ganga Aarti happens every evening. Thousands gather to witness this spiritual ceremony with lamps, bells, and devotional music.",
                image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Dashashwamedh+Ghat+Varanasi"
            },
            {
                name: "Kashi Vishwanath Temple",
                type: "famous",
                description: "One of the most sacred Hindu temples dedicated to Lord Shiva. The temple's golden spire can be seen from across the Ganges. A must-visit spiritual destination.",
                image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kashi+Vishwanath+Temple+Varanasi"
            },
            {
                name: "Assi Ghat Early Morning",
                type: "hidden",
                description: "Experience the magical sunrise at Assi Ghat around 5:30 AM. Watch locals perform yoga, take holy dips, and participate in the serene morning aarti. A hidden peaceful experience away from tourist crowds.",
                image: "http://rishikeshdaytour.com/blog/wp-content/uploads/2024/09/Morning-Assi-Ghat-Ganga-Aarti.jpg",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Assi+Ghat+Varanasi"
            },
            {
                name: "Hidden Temple Lanes",
                type: "hidden",
                description: "Narrow ancient lanes behind the main ghats hide 100+ small temples, some over 1000 years old. These labyrinthine alleys offer authentic glimpses of local spiritual life.",
                image: "https://thumbs.dreamstime.com/b/man-cans-water-come-home-varanasi-india-narrow-street-historical-buildings-varanasi-urban-agglomeration-has-40526427.jpg",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Temple+Lanes+Varanasi"
            }
        ],
        food: [
            {
                name: "Kachori Sabzi",
                description: "Crispy deep-fried bread with spicy potato curry - Banaras breakfast staple",
                location: "Kashi Chaat Bhandar, Godowlia",
                bestTime: "Morning 7 AM - 11 AM",
                image: "https://i.pinimg.com/736x/3b/1c/87/3b1c8772e45d0558ccedebb82f572b0c.jpg"
            },
            {
                name: "Malaiyo",
                description: "Unique winter delicacy - milk foam dessert available only from November to February",
                location: "Various spots near ghats",
                bestTime: "Early Morning 6 AM - 10 AM (Winter only)",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5BGe0Zqhn7v9rBSht6hr5zwBDV6IfeRQK2Zi5-sD&s"
            }
        ]
    },
    
    jaipur: {
        name: "Jaipur",
        description: "The Pink City, a royal heritage destination with magnificent palaces",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww",
        places: [
            {
                name: "Hawa Mahal",
                type: "famous",
                description: "The iconic Palace of Winds with 953 small windows designed for royal ladies to observe street festivals while remaining unseen. A masterpiece of Rajput architecture built in 1799.",
                image: "https://images.unsplash.com/photo-1599661046827-dacff0d1b01b?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur"
            },
            {
                name: "Amber Fort",
                type: "famous",
                description: "Majestic hilltop fort built with red sandstone and marble. Features Sheesh Mahal (Mirror Palace), stunning courtyards, and elephant rides to the entrance.",
                image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Amber+Fort+Jaipur"
            },
            {
                name: "Panna Meena Ka Kund",
                type: "hidden",
                description: "An incredible 16th-century stepwell with symmetrical stairs on three sides creating a geometric wonder. This hidden gem near Amber Fort is perfect for photography and rarely crowded.",
                image: "https://influencerbookofworldrecords.com/AdminAssets/assets/img/blog/1746104462.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Panna+Meena+Ka+Kund+Jaipur"
            },
            {
                name: "Galta Ji (Monkey Temple)",
                type: "hidden",
                description: "Ancient Hindu pilgrimage site nestled in Aravalli hills with natural springs and holy water tanks. Home to troops of monkeys and featuring stunning sunset views over Jaipur.",
                image: "http://rajasthantourdriver.com/wp-content/uploads/2024/10/monkey5.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Galta+Ji+Jaipur"
            }
        ],
        food: [
            {
                name: "Pyaz Kachori",
                description: "Crispy fried pastry stuffed with spiced onion filling - Jaipur's signature snack",
                location: "Rawat Mishthan Bhandar, Sindhi Camp",
                bestTime: "Evening 4 PM - 8 PM",
                image: "https://rawatmisthanbhandar.in/assets/img/other/about-thumb-list1.png"
            },
            {
                name: "Laal Maas",
                description: "Fiery red mutton curry with authentic Rajasthani spices - a must-try for meat lovers",
                location: "Chokhi Dhani, Handi Restaurant",
                bestTime: "Dinner 7 PM - 10 PM",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54nnsz66-tNkUEP-bsuOkAgyX2iv3cCe5GA&s"
            }
        ]
    },
    
    kerala: {
        name: "Kerala",
        description: "God's Own Country, tropical paradise with backwaters and beaches",
        image: "https://images.unsplash.com/photo-1589983846997-04788035bc83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VyYWxhfGVufDB8fDB8fHww",
        places: [
            {
                name: "Alleppey Backwaters",
                type: "famous",
                description: "Venice of the East - experience serene houseboat cruises through palm-fringed canals, rice paddies, and traditional villages. A unique way to explore Kerala's aquatic lifestyle.",
                image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Alleppey+Backwaters+Kerala"
            },
            {
                name: "Munnar Tea Gardens",
                type: "famous",
                description: "Rolling hills covered with emerald tea plantations, cool climate, and misty mountains. Visit tea factories, go trekking, and spot rare Nilgiri Tahr.",
                image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Munnar+Kerala"
            },
            {
                name: "Silent Valley National Park",
                type: "hidden",
                description: "Last remaining undisturbed rainforest in India with no human habitation. Home to rare lion-tailed macaques, 1000+ species of plants, and pristine wilderness.",
                image: "https://media.licdn.com/dms/image/v2/D5612AQEPA7Kijx3efA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689856328296?e=2147483647&v=beta&t=K0XcwFez_NFo7iIq36UBUSSv9PklC9-v4KvfHHMof5o",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Silent+Valley+National+Park+Kerala"
            },
            {
                name: "Kuttanad Backwaters",
                type: "hidden",
                description: "India's lowest altitude region (below sea level) with unique farming practices. Experience authentic village life, toddy shops, and unexplored canals away from tourist routes.",
                image: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkuttanad-1728568612_f6860bb3d5c7d33b0493.webp&w=3840&q=75",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kuttanad+Kerala"
            }
        ],
        food: [
            {
                name: "Appam with Stew",
                description: "Soft rice pancake with crispy edges served with coconut milk-based vegetable or meat stew",
                location: "Local restaurants in Kochi, Trivandrum",
                bestTime: "Breakfast 7 AM - 10 AM",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oL5WNkdq3E7jMiW1J4IdIa46O34iA5-kZQ&s"
            },
            {
                name: "Puttu and Kadala",
                description: "Steamed rice cake cylinders with black chickpea curry - Kerala's traditional breakfast",
                location: "Throughout Kerala",
                bestTime: "Morning 7 AM - 11 AM",
                image: "https://c.ndtvimg.com/2020-12/e8hlvdag_kadala-curry_625x300_29_December_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
            }
        ]
    },
    
    ladakh: {
        name: "Ladakh",
        description: "Land of High Passes, stunning Himalayan landscapes and Buddhist culture",
        image: "https://plus.unsplash.com/premium_photo-1697729578645-a9decad10b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        places: [
            {
                name: "Pangong Lake",
                type: "famous",
                description: "Breathtaking high-altitude lake at 14,270 feet changing colors from blue to green to red. Extends from India to Tibet, featured in Bollywood movie '3 Idiots'.",
                image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Pangong+Lake+Ladakh"
            },
            {
                name: "Nubra Valley",
                type: "famous",
                description: "Valley of flowers with double-humped Bactrian camels, sand dunes, and monasteries. Accessible via world's highest motorable road - Khardung La Pass.",
                image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Nubra+Valley+Ladakh"
            },
            {
                name: "Turtuk Village",
                type: "hidden",
                description: "Last village before Pakistan border, opened to tourists in 2010. Experience Balti culture, apricot orchards, and stunning mountain views untouched by mass tourism.",
                image: "https://static.toiimg.com/thumb/100621007/Turtuk.jpg?width=1200&height=900",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Turtuk+Village+Ladakh"
            },
            {
                name: "Hanle Observatory",
                type: "hidden",
                description: "One of world's highest astronomical observatories at 15,000 feet. Perfect dark skies for stargazing, Milky Way photography, and experiencing absolute silence.",
                image: "https://www.brmexpeditions.com/wp-content/uploads/2024/01/Hanle-2.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hanle+Ladakh"
            }
        ],
        food: [
            {
                name: "Thukpa",
                description: "Hot noodle soup with vegetables or meat - perfect for cold Ladakh weather",
                location: "Leh Market, Tibetan restaurants",
                bestTime: "Lunch & Dinner",
                image: "https://www.ju-lehadventure.com/photos/ladakh_information/food-ladakh-10-must-try-local-dishes-and-drinks/thukpa.jpg"
            },
            {
                name: "Momos",
                description: "Steamed or fried dumplings filled with vegetables or meat - Ladakhi specialty",
                location: "Throughout Leh and Nubra Valley",
                bestTime: "Evening 5 PM - 9 PM",
                image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/a8/c4/db.jpg"
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    loadStates();
    loadHiddenGems();
    loadFoodItems();
    initScrollEffects();
});


function loadStates() {
    const statesGrid = document.getElementById('statesGrid');
    
    Object.keys(statesData).forEach(stateKey => {
        const state = statesData[stateKey];
        
        const stateCard = document.createElement('div');
        stateCard.className = 'state-card';
        stateCard.style.animationDelay = `${Object.keys(statesData).indexOf(stateKey) * 0.1}s`;
        
        stateCard.innerHTML = `
            <img src="${state.image}" alt="${state.name}" class="state-card-image">
            <div class="state-card-content">
                <h3 class="state-card-title">${state.name}</h3>
                <p class="state-card-description">${state.description}</p>
                <ul class="places-list">
                    ${state.places.slice(0, 3).map(place => 
                        `<li onclick="showPlaceDetails('${stateKey}', '${place.name}')">${place.name}</li>`
                    ).join('')}
                </ul>
                <button class="explore-button" onclick="showStateDetails('${stateKey}')">
                    Explore ${state.name}
                </button>
            </div>
        `;
        
        statesGrid.appendChild(stateCard);
    });
}



function loadHiddenGems() {
    const gemsGrid = document.getElementById('gemsGrid');
    let allHiddenGems = [];
    
    Object.keys(statesData).forEach(stateKey => {
        const state = statesData[stateKey];
        const hiddenPlaces = state.places.filter(place => place.type === 'hidden');
        hiddenPlaces.forEach(place => {
            allHiddenGems.push({
                ...place,
                stateName: state.name,
                stateKey: stateKey
            });
        });
    });
    
    
    allHiddenGems.forEach((gem, index) => {
        const gemCard = document.createElement('div');
        gemCard.className = 'gem-card';
        gemCard.style.animationDelay = `${index * 0.1}s`;
        
        gemCard.innerHTML = `
            <div style="position: relative; overflow: hidden;">
                <span class="gem-badge">Hidden Gem 💎</span>
                <img src="${gem.image}" alt="${gem.name}" class="gem-card-image">
            </div>
            <div class="gem-card-content">
                <h3 class="gem-card-title">${gem.name}</h3>
                <p class="gem-card-location">📍 ${gem.stateName}</p>
                <p class="gem-card-description">${gem.description.substring(0, 100)}...</p>
                <button class="explore-button" onclick="showPlaceDetails('${gem.stateKey}', '${gem.name}')">
                    Discover More
                </button>
            </div>
        `;
        
        gemCard.addEventListener('click', () => {
            showPlaceDetails(gem.stateKey, gem.name);
        });
        
        gemsGrid.appendChild(gemCard);
    });
}


function loadFoodItems() {
    const foodGrid = document.getElementById('foodGrid');
    let allFoodItems = [];
    
   
    Object.keys(statesData).forEach(stateKey => {
        const state = statesData[stateKey];
        state.food.forEach(food => {
            allFoodItems.push({
                ...food,
                stateName: state.name
            });
        });
    });
    
    // Display food items
    allFoodItems.forEach((food, index) => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.style.animationDelay = `${index * 0.1}s`;
        
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}" class="food-card-image">
            <div class="food-card-content">
                <h3 class="food-card-title">${food.name}</h3>
                <p class="food-card-location">📍 ${food.stateName}</p>
                <div class="food-card-details">
                    <p><strong>Location:</strong> ${food.location}</p>
                    <p><strong>Best Time:</strong> ${food.bestTime}</p>
                    <p>${food.description}</p>
                </div>
            </div>
        `;
        
        foodGrid.appendChild(foodCard);
    });
}


function showStateDetails(stateKey) {
    const state = statesData[stateKey];
    const modal = document.getElementById('placeModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 class="place-modal-title">${state.name}</h2>
        <img src="${state.image}" alt="${state.name}" class="place-modal-image">
        <p class="place-modal-description">${state.description}</p>
        
        <h3 style="margin: 2rem 0 1rem; color: var(--primary-color);">Places to Visit</h3>
        <div style="display: grid; gap: 1rem;">
            ${state.places.map(place => `
                <div style="padding: 1rem; background: #f8f9fa; border-radius: 10px; cursor: pointer;"
                     onclick="showPlaceDetails('${stateKey}', '${place.name}')">
                    <h4>${place.name} ${place.type === 'hidden' ? '💎' : '⭐'}</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">
                        ${place.description.substring(0, 120)}...
                    </p>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
}



function showPlaceDetails(stateKey, placeName) {
    const state = statesData[stateKey];
    const place = state.places.find(p => p.name === placeName);
    
    if (!place) return;
    
    const modal = document.getElementById('placeModal');
    const modalBody = document.getElementById('modalBody');
    
    // Build food section HTML
    const foodSection = state.food.map(food => `
        <div class="food-item">
            <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;">🍴 ${food.name}</h4>
            <p style="margin-bottom: 0.3rem;"><strong>Where:</strong> ${food.location}</p>
            <p style="margin-bottom: 0.3rem;"><strong>Best Time:</strong> ${food.bestTime}</p>
            <p style="color: #666;">${food.description}</p>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <h2 class="place-modal-title">${place.name}</h2>
        <img src="${place.image}" alt="${place.name}" class="place-modal-image">
        <p class="place-modal-description">${place.description}</p>
        
        <div class="food-section-modal">
            <h3 style="display: flex; align-items: center; gap: 0.5rem;">
                🍲 Food on Your Route
            </h3>
            <p style="margin-bottom: 1rem; color: #666;">Best street food near ${place.name}:</p>
            ${foodSection}
        </div>
        
        <button class="map-button" onclick="window.open('${place.mapLink}', '_blank')">
            📍 View ${place.name} on Google Maps
        </button>
    `;
    
    modal.style.display = 'block';
}



function closeModal() {
    const modal = document.getElementById('placeModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('placeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



function scrollToStates() {
    document.getElementById('states').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}



function initScrollEffects() {
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        const backToTop = document.getElementById('backToTop');
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    // Add scroll animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.state-card, .gem-card, .food-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}



document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});



console.log('%c🕉️ Explore Bharat - Smart Tourist Guide', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cCollege Project 2026', 'color: #666; font-size: 14px;');
console.log('%cMade with ❤️ for India', 'color: #C1121F; font-size: 14px;');
