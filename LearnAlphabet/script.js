document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startBtn");
    const userBtn = document.getElementById("userBtn");
    const eggContainer = document.getElementById("eggContainer");
    const closeButton = document.getElementById("closeBtn");
    const eggs = document.querySelectorAll(".egg");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");
    const containerGreen = document.querySelector(".container_green");
    const eggWrapper = document.querySelector(".egg-wrapper");

    
    
    if (!userBtn) {
        console.error("Không tìm thấy nút user-btn với id 'userBtn'!");
        return;
    }

    if (!eggContainer) {
        console.error("Không tìm thấy .egg-container!");
        return;
    }

    // userBtn.addEventListener("click", function () {
    //     eggContainer.style.display = eggContainer.style.display === "none" ? "block" : "none";
    // });


    const informationWrapper = document.querySelector('.information-wrapper');
    const loginContainer = document.getElementById("loginContainer");
    const registerContainer = document.getElementById("registerContainer");
    const loginRegister = document.getElementById("loginRegister");

    const showRegisterBtn = document.getElementById("showRegister");
    const showLoginBtn = document.getElementById("showLogin");
    const infoButton = document.querySelector('.info-web-btn');

    const closeLoginBtn = document.getElementById("closeLogin");
    const closeRegisterBtn = document.getElementById("closeRegister");
    const infoCloseButton = document.createElement("closeInfo");
    



// Ấn nút "User" để mở form đăng nhập
userBtn.addEventListener("click", function () {
    loginRegister.classList.add("active");
    loginContainer.classList.add("active");
    registerContainer.classList.remove("active");
});

// Mở form đăng ký khi nhấn "Register"
showRegisterBtn.addEventListener("click", function (event) {
    event.preventDefault();
    loginContainer.classList.remove("active");
    registerContainer.classList.add("active");
});

// Mở lại form đăng nhập khi nhấn "Log In"
showLoginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    registerContainer.classList.remove("active");
    loginContainer.classList.add("active");
});

// Đóng form đăng nhập khi nhấn "×"
closeLoginBtn.addEventListener("click", function () {
    loginContainer.classList.remove("active");
    loginRegister.classList.remove("active");
});

// Đóng form đăng ký khi nhấn "×"
closeRegisterBtn.addEventListener("click", function () {
    registerContainer.classList.remove("active");
    loginRegister.classList.remove("active");
});

// Hiển thị informationWrapper khi nhấn infoButton
infoButton.addEventListener("click", function () {
    informationWrapper.classList.add("active");
});

// Đóng informationWrapper khi nhấn closeButton
closeButton.addEventListener("click", function () {
    informationWrapper.classList.remove("active");
});


    
    
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("detail-container");
    infoWrapper.style.position = "fixed";
    infoWrapper.style.top = "-100vh";
    infoWrapper.style.left = "50%";
    infoWrapper.style.transform = "translate(-50%, -50%)";
    infoWrapper.style.width = "80%";
    infoWrapper.style.height = "600px";
    infoWrapper.style.background = "pink";
    infoWrapper.style.borderRadius = "15px";
    infoWrapper.style.padding = "20px";
    infoWrapper.style.boxShadow = "0px 0px 20px 10px rgba(250, 150, 212, 0.8)";
    infoWrapper.style.zIndex = "2000";
    infoWrapper.style.transition = "top 0.5s ease-in-out";
    document.body.appendChild(infoWrapper);
    
    const whiteLine = document.createElement("div");
    whiteLine.style.position = "absolute";
    whiteLine.style.top = "0";
    whiteLine.style.left = "50%";
    whiteLine.style.transform = "translateX(-50%)";
    whiteLine.style.width = "2px"; 
    whiteLine.style.height = "100%";
    whiteLine.style.background = "white";
    whiteLine.style.boxShadow = "0 0 10px 5px rgba(255, 255, 255, 0.6)";
    infoWrapper.appendChild(whiteLine);

    const leftImage = document.createElement("img");
    leftImage.src = "Images/Image1.png"; // Đường dẫn đến ảnh
    leftImage.style.position = "absolute";
    leftImage.style.top = "50%";
    leftImage.style.left = "12%";
    leftImage.style.transform = "translateY(-50%)";
    leftImage.style.width = "25%";
    leftImage.style.height = "50%";
    leftImage.style.objectFit = "cover"; // Đảm bảo ảnh hiển thị đẹp trong khung
    leftImage.style.borderTopLeftRadius = "15px";
    leftImage.style.borderBottomLeftRadius = "15px";
    infoWrapper.appendChild(leftImage);

    
    const closeInfoButton = document.createElement("button");
    closeInfoButton.innerText = "X";
    closeInfoButton.classList.add("close-btn");
    closeInfoButton.style.position = "absolute";
    closeInfoButton.style.top = "10px";
    closeInfoButton.style.right = "15px";
    closeInfoButton.style.background = "red";
    closeInfoButton.style.color = "white";
    closeInfoButton.style.border = "none";
    closeInfoButton.style.padding = "5px 10px";
    closeInfoButton.style.fontSize = "18px";
    closeInfoButton.style.cursor = "pointer";
    closeInfoButton.style.borderRadius = "5px";
    closeInfoButton.addEventListener("click", function () {
        infoWrapper.style.top = "-100vh";
        eggContainer.style.display = "block";
    });
    infoWrapper.appendChild(closeInfoButton);

    // const fontLink = document.createElement("link");
    // fontLink.href = "https://fonts.googleapis.com/css2?family=Modak&display=swap";
    // fontLink.rel = "stylesheet";
    // document.head.appendChild(fontLink);

    const rightContent = document.createElement("div");
    rightContent.style.position = "absolute";
    rightContent.style.top = "70%";
    rightContent.style.left = "55%";
    rightContent.style.transform = "translateY(-50%)";
    rightContent.style.width = "40%";
    rightContent.style.height = "50%";
    rightContent.style.fontSize = "50px";
    rightContent.style.textAlign = "center";
    rightContent.style.display = "block";
    rightContent.style.alignItems = "center";
    rightContent.style.justifyContent = "center";
    // rightContent.style.fontFamily = '"Modak", system-ui';
    rightContent.style.fontFamily = "'DynaPuff', sans-serif"; 

    rightContent.style.letterSpacing = "5px";
    infoWrapper.appendChild(rightContent);
    console.log("✅ rightContent đã được tạo:", rightContent);
    
    function createCloseButton(targetContainer) {
        const closeButton = document.createElement("button");
        closeButton.innerText = "X";
        closeButton.classList.add("close-btn");
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "15px";
        closeButton.style.background = "red";
        closeButton.style.color = "white";
        closeButton.style.border = "none";
        closeButton.style.padding = "5px 10px";
        closeButton.style.fontSize = "18px";
        closeButton.style.cursor = "pointer";
        closeButton.style.borderRadius = "5px";
    
        closeButton.addEventListener("click", function () {
            targetContainer.classList.remove("active");
        });
    
        targetContainer.appendChild(closeButton);
    }
    
    // Thêm nút đóng vào Login và Register Form
    createCloseButton(informationWrapper);
    createCloseButton(loginContainer);
    createCloseButton(registerContainer);
    
    const loginButton = document.querySelector(".login-button");

if (loginButton) {
    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Lấy giá trị từ input
        const username = document.querySelector("input[placeholder='Username']").value.trim();
        const password = document.querySelector("input[placeholder='Password']").value.trim();

        if (!username || !password) {
            alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
            return;
        }

        // Gửi dữ liệu đến server để xác thực
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }) // Đảm bảo rằng tên trường là `username` và `password`
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Đăng nhập thành công!");
                localStorage.setItem("userID", data.userID); // Lưu ID người dùng nếu cần
                localStorage.setItem("username", username); // Lưu username để hiển thị
                displayUsername(username);
                // window.location.href = "dashboard.html"; // Chuyển hướng sau khi đăng nhập thành công
            } else {
                alert("Tài khoản hoặc mật khẩu không đúng!");
            }
        })
        .catch(error => {
            console.error("Lỗi khi gửi yêu cầu đăng nhập:", error);
            alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        });
    });
}
function displayUsername(username) {
    let userBtn = document.querySelector(".user-btn");

    if (!userBtn) return; // Nếu không tìm thấy userBtn thì thoát

    // Kiểm tra nếu đã có username hiển thị thì cập nhật, không thì tạo mới
    let usernameSpan = document.querySelector(".username-display");
    if (!usernameSpan) {
        usernameSpan = document.createElement("span");
        usernameSpan.classList.add("username-display");
        userBtn.parentNode.insertBefore(usernameSpan, userBtn); // Chèn trước userBtn
    }

    usernameSpan.textContent = username; // Gán tên đăng nhập
    usernameSpan.setAttribute("data-fullname", username);

    // Thêm sự kiện click để đăng xuất
    usernameSpan.addEventListener("click", function () {
        const confirmLogout = confirm("Bạn có muốn đăng xuất không?");
        if (confirmLogout) {
            // Xóa thông tin người dùng khỏi localStorage
            localStorage.removeItem("userID");
            localStorage.removeItem("username");

            // Cập nhật lại giao diện, ẩn username
            usernameSpan.remove();

            alert("Đăng xuất thành công!");
        }
    });
}

const registerButton = document.querySelector(".register-button");

if (registerButton) {
    registerButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Lấy giá trị từ input
        const username = document.querySelector("#registerUsername").value.trim();
        const password = document.querySelector("#registerPassword").value.trim();
        const confirmPassword = document.querySelector("#confirmPassword").value.trim();

        // Kiểm tra nếu các trường nhập vào hợp lệ
        if (!username || !password || !confirmPassword) {
            alert("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Mật khẩu và xác nhận mật khẩu không khớp.");
            return;
        }

        // Gửi dữ liệu đến server để đăng ký
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
                // Chuyển hướng đến trang đăng nhập hoặc tự động hiển thị form đăng nhập
                // window.location.href = "login.html";
            } else {
                alert("Có lỗi xảy ra khi đăng ký.");
            }
        })
        .catch(error => {
            console.error("Lỗi khi gửi yêu cầu đăng ký:", error);
            alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        });
    });
}


    const groupSize = 3;
    let currentIndex = 0;
    let brokenEggs = {}; 
    let letterElements = {}; 

    function showMessage(message) {
        alert(message);
    }

// Xử lý sự kiện khi người dùng nhấn nút Start
// Xóa tất cả dữ liệu trong localStorage khi trang được tải
window.onload = function() {
    localStorage.clear(); // Xóa tất cả dữ liệu trong localStorage
};

// Kiểm tra nếu trang được reload thì cũng xóa localStorage
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    localStorage.clear(); // Xóa dữ liệu khi reload trang
}

// Xử lý sự kiện khi người dùng nhấn nút Start
startButton.addEventListener("click", function () {
    const username = localStorage.getItem("username");

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!username) {
        // Nếu chưa đăng nhập, yêu cầu người dùng đăng nhập
        alert("Bạn cần phải đăng nhập để bắt đầu.");
    } else {
        // Nếu đã đăng nhập, hiển thị eggContainer và gọi hàm showEggGroup
        eggContainer.classList.add("active");
        showEggGroup(currentIndex);
    }
});

// Kiểm tra trạng thái đăng nhập khi trang được tải lên lần đầu
const username = localStorage.getItem("username");

// Nếu chưa đăng nhập, bạn có thể ẩn eggContainer hoặc làm điều gì đó nếu cần
if (!username) {
    eggContainer.classList.remove("active");  // Ẩn eggContainer nếu chưa đăng nhập
} else {
    // Nếu đã đăng nhập, hiển thị eggContainer
    eggContainer.classList.add("active");
    showEggGroup(currentIndex);
}


    

    closeButton.addEventListener("click", function () {
        eggContainer.classList.remove("active");
        // loginContainer.classList.remove("active");
    });

    const notification = document.getElementById("notification"); // Thẻ hiển thị thông báo

    const letterShown = {}; // Lưu trạng thái chữ đã được nhấn
    
    eggs.forEach((egg, index) => {
        egg.setAttribute("data-id", index + 1);
        egg.addEventListener("click", function () {
            let eggId = parseInt(egg.getAttribute("data-id"));
    
            // Kiểm tra nếu không phải trứng đầu tiên và chữ cái của trứng trước chưa được nhấn
            if (eggId > 1 && (!letterShown[eggId - 1])) {
                showMessage("Bạn cần nhấn vào chữ cái trước khi mở trứng tiếp theo!");
                return;
            }
    
            // Nếu trứng chưa bị vỡ, làm vỡ nhưng chưa hiển thị chữ ngay
            if (!brokenEggs[eggId]) {
                egg.src = "Images/Egg1_broken.png";
                egg.classList.add("broken");
                brokenEggs[eggId] = true;
                return;
            }
    
            // Nếu trứng đã vỡ nhưng chưa hiển thị chữ, hiển thị chữ ngay khi ấn lần 2
            if (!letterElements[eggId]) {
                fetch(`http://localhost:3000/letter/${eggId}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.alphabet) {
                            showLetter(egg, data.alphabet, eggId);
                        }
                    })
                    .catch(error => console.error("Lỗi khi lấy dữ liệu từ server:", error));
            }
        });
    });
    
    function showLetter(egg, letter, eggId) {
        if (letterElements[eggId]) {
            letterElements[eggId].style.display = "block";
            return;
        }
        const letterDiv = document.createElement("div");
        letterDiv.innerText = letter;
        letterDiv.style.position = "absolute";
        letterDiv.style.top = egg.offsetTop + "px";
        letterDiv.style.left = egg.offsetLeft + "px";
        letterDiv.style.width = egg.offsetWidth + "px";
        letterDiv.style.height = egg.offsetHeight + "px";
        letterDiv.style.display = "flex";
        letterDiv.style.alignItems = "center";
        letterDiv.style.justifyContent = "center";
        letterDiv.style.fontSize = egg.offsetWidth * 0.8 + "px";
        letterDiv.style.fontWeight = "bold";
        letterDiv.style.color = getRandomColor();
        letterDiv.style.textAlign = "center";
        letterDiv.style.backgroundColor = "transparent";
        letterDiv.style.pointerEvents = "auto";
        letterDiv.style.fontFamily = "'DynaPuff', sans-serif"; 
    
        // Khi nhấn vào chữ cái
        letterDiv.addEventListener("click", function () {
            eggContainer.style.display = "none";
            showInfoWrapper(eggId);
            letterShown[eggId] = true; // Đánh dấu chữ cái đã được nhấn
        });
    
        egg.parentNode.appendChild(letterDiv);
        egg.style.visibility = "hidden";
        letterElements[eggId] = letterDiv;
    }
    
    function getRandomColor() {
        let color;
        do {
            const letters = "0123456789ABCDEF";
            color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        } while (isLightPink(color)); // Kiểm tra nếu màu là hồng nhạt thì tạo lại
    
        return color;
    }
    
    function isLightPink(hexColor) {
        const r = parseInt(hexColor.substr(1, 2), 16);
        const g = parseInt(hexColor.substr(3, 2), 16);
        const b = parseInt(hexColor.substr(5, 2), 16);
        
        // Hồng nhạt thường có R cao (>= 200), G trung bình (100-200), B cao (>= 180)
        return r >= 200 && g >= 100 && g <= 200 && b >= 180;
    }
    
    
    function showInfoWrapper(eggId) {
        // Cập nhật hình ảnh của leftImage
        leftImage.src = `Images/Image${eggId}.png`;
    
        // Ẩn rightContent ban đầu
        rightContent.style.display = "none";
        rightContent.style.opacity = 0;  // Đảm bảo opacity là 0 trước khi hiển thị
        alert("Hãy đoán xem hình nói về gì nào!");
        // Tạo sự kiện khi nhấn vào leftImage
        leftImage.onclick = function () {
            
            // Gọi API để lấy nội dung
            fetch(`http://localhost:3000/content/${eggId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Lỗi HTTP! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Kiểm tra dữ liệu từ API
                    if (data && data.NoiDung1) {
                        rightContent.innerText = data.NoiDung1; // Gán nội dung vào rightContent
                    } else {
                        rightContent.innerText = "Không có nội dung."; // Nếu không có nội dung hợp lệ
                    }
    
                    // Hiển thị rightContent sau khi nhận được dữ liệu
                    rightContent.style.display = "block";
    
                    // Đặt opacity về 1 để kích hoạt hiệu ứng mờ dần
                    setTimeout(() => {
                        rightContent.style.opacity = 1; // Hiển thị content dần dần
                    }, 10); // Delay một chút để đảm bảo hiệu ứng hoạt động
                })
                .catch(error => {
                    console.error("Lỗi khi lấy dữ liệu nội dung:", error);
                    rightContent.innerText = "Lỗi tải nội dung."; // Hiển thị thông báo lỗi
                    rightContent.style.display = "block";
    
                    // Đặt opacity về 1 để kích hoạt hiệu ứng mờ dần
                    setTimeout(() => {
                        rightContent.style.opacity = 1; // Hiển thị content dần dần
                    }, 10);
                });
        };
    
        // Hiển thị infoWrapper với hiệu ứng trượt xuống
        setTimeout(() => {
            infoWrapper.style.top = "50%"; // Sau 10ms, đưa infoWrapper xuống vị trí giữa màn hình
        }, 10);
    }
    
    
    


function showEggGroup(startIndex) {
    let remainingEggs = eggs.length - startIndex;
    let displayEggs = [];

    eggs.forEach((egg, i) => {
        let eggId = egg.getAttribute("data-id");

        // Ẩn toàn bộ trứng và chữ cái trước khi xử lý nhóm mới
        egg.style.display = "none";
        if (letterElements[eggId]) {
            letterElements[eggId].style.display = "none";
        }

        if (remainingEggs > groupSize) {
            // Hiển thị nhóm bình thường (3 trứng)
            egg.style.display = (i >= startIndex && i < startIndex + groupSize) ? "block" : "none";
        } else if (remainingEggs === 2) {
            // Nếu còn 2 trứng cuối thì hiển thị chúng và căn giữa
            egg.style.display = (i >= startIndex) ? "block" : "none";
            eggContainer.style.justifyContent = "center";
        } else if (remainingEggs === 1) {
            // Nếu chỉ còn 1 trứng cuối thì căn giữa
            egg.style.display = (i >= startIndex) ? "block" : "none";
            eggContainer.style.justifyContent = "center";
        }

        // Hiển thị chữ cái tương ứng với nhóm hiện tại
        if (egg.style.display === "block") {
            displayEggs.push(egg);
            if (letterElements[eggId] && letterShown[eggId]) {
                letterElements[eggId].style.display = "block";
            }
        }
    });

    // Căn giữa nếu chỉ còn 1 hoặc 2 trứng cuối
    if (displayEggs.length === 1 || displayEggs.length === 2) {
        eggContainer.style.justifyContent = "center";
    } else {
        eggContainer.style.justifyContent = "space-between";
    }
}

leftArrow.addEventListener("click", function () {
    currentIndex -= groupSize;

    // Nếu quay ngược lại từ nhóm đầu tiên thì hiển thị nhóm cuối cùng
    if (currentIndex < 0) {
        currentIndex = eggs.length - (eggs.length % groupSize || groupSize);
    }

    showEggGroup(currentIndex);
});

rightArrow.addEventListener("click", function () {
    currentIndex += groupSize;

    // Nếu vượt quá nhóm cuối thì quay lại nhóm đầu tiên
    if (currentIndex >= eggs.length) {
        currentIndex = 0;
    }

    showEggGroup(currentIndex);
});

// Hiển thị nhóm đầu tiên khi tải trang
showEggGroup(currentIndex);
});
// code mới được thêm vào 
function showInfoWrapper(eggId) {
    console.log("📡 Đang gọi API với eggId:", eggId);

    if (!rightContent) {
        console.error("⚠️ Lỗi: rightContent chưa được tạo!");
        return;
    }

    leftImage.src = `Images/Image${eggId}.png`;

    fetch(`http://localhost:3000/content/${eggId}`)
    .then(response => {
        console.log("📡 Đang gọi API với eggId:", eggId);
        if (!response.ok) {
            throw new Error(`Lỗi HTTP! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("📄 Dữ liệu từ server:", data);

        if (!rightContent) {
            console.error("⚠️ Lỗi: rightContent chưa được tạo!");
            return;
        }

        if (data && data.NoiDung1 && data.Alphabet) {
            console.log("📝 Nội dung:", data.NoiDung1);
            console.log("🔠 Chữ cái cần làm nổi bật:", data.Alphabet);

            // 🚀 Cập nhật nội dung với chữ cái nổi bật
            rightContent.innerHTML = highlightLetter(data.NoiDung1, data.Alphabet);
        } else {
            console.warn("⚠️ Không có nội dung hợp lệ từ API.");
            rightContent.innerText = "Không có nội dung.";
        }
    })
    .catch(error => {
        console.error("❌ Lỗi khi lấy dữ liệu nội dung:", error);
        rightContent.innerText = "Lỗi tải nội dung.";
    });

}

// Hàm tạo nội dung và phóng to chữ cái trùng với Alphabet
function highlightLetter(text, highlightLetter) {
    console.log("📌 Văn bản gốc:", text);
    console.log("📍 Chữ cái cần làm nổi bật:", highlightLetter);

    if (!highlightLetter) {
        console.warn("⚠️ Không có chữ cái để làm nổi bật!");
        return text;
    }

    // Chuẩn hóa Unicode để tránh lỗi dấu tiếng Việt
    const normalizedText = text.normalize("NFC");
    const normalizedLetter = highlightLetter.normalize("NFC").trim();

    // Thoát nếu không tìm thấy chữ cần làm nổi bật trong nội dung
    const index = normalizedText.toLowerCase().indexOf(normalizedLetter.toLowerCase());
    if (index === -1) {
        console.warn("⚠️ Không tìm thấy chữ cái cần làm nổi bật:", highlightLetter);
        return text;
    }

    // Chỉ thay thế chữ cái đầu tiên
    const regex = new RegExp(normalizedLetter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "i");
    console.log("🔍 Biểu thức chính quy sử dụng:", regex);

    // Thay thế chỉ 1 lần
    const highlightedText = normalizedText.replace(regex, (match) =>
        `<span style="font-size: 80px; font-weight: bold; color: red;
                     text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
                     text-decoration: underline;">
            ${match}
        </span>`
    );

    console.log("🎨 Kết quả sau khi thay thế:", highlightedText);
    return highlightedText;
}

// hiệu ứng khi nhấn nút button start
const button = document.getElementById("startBtn");
// Khai báo danh sách stars để chứa các ngôi sao
let stars = [];

function removeStars() {
    // Xóa tất cả các ngôi sao hiện tại
    stars.forEach(star => star.remove());
    stars = []; // Xóa danh sách ngôi sao sau khi chúng đã được xóa khỏi DOM
}

button.addEventListener("mouseover", () => {
    removeStars(); // Xóa các ngôi sao cũ

    for (let i = 0; i < 5; i++) { 
        let star = document.createElement("div");
        star.classList.add("stars");

        // Thêm lớp 'large' ngẫu nhiên cho ngôi sao
        if (Math.random() > 0.5) star.classList.add("large");

        document.body.appendChild(star); // Thêm ngôi sao vào body

        let buttonRect = button.getBoundingClientRect(); // Vị trí của button
        let startX = Math.random() * buttonRect.width + buttonRect.left; // Vị trí bắt đầu ngẫu nhiên của ngôi sao
        let startY = Math.random() * buttonRect.height + buttonRect.top;

        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;

        // Đặt chuyển động cho ngôi sao sau một khoảng thời gian ngắn
        setTimeout(() => {
            let angle = Math.random() * 2 * Math.PI; // Góc ngẫu nhiên
            let distance = Math.random() * 50 + 20; // Khoảng cách di chuyển ngẫu nhiên
            let moveX = Math.cos(angle) * distance;
            let moveY = Math.sin(angle) * distance;

            // Áp dụng phép biến đổi cho ngôi sao
            star.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`;
            star.style.opacity = "1"; // Làm ngôi sao hiển thị
        }, 50);
        
        stars.push(star); // Thêm ngôi sao vào danh sách stars
    }
});


button.addEventListener("mouseleave", () => {
    removeStars();
});

function removeStars() {
    stars.forEach(star => {
        star.style.opacity = "0";
        setTimeout(() => star.remove(), 500);
    });
    stars = []; 
}


