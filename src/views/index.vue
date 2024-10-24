<script setup>

</script>

<template>
<div class="navbar">
    <div class="navbar-content">
        <div class="logo">
            <img src="https://via.placeholder.com/94x36" alt="Logo" />
        </div>
        <div class="nav-links">
            <div class="nav-item">
                <p class="nav-text">Home</p>
                <img class="nav-icon" src="https://via.placeholder.com/12x12" alt="Icon" />
            </div>
            <div class="nav-item">
                <p class="nav-text">Blog</p>
                <img class="nav-icon" src="https://via.placeholder.com/12x12" alt="Icon" />
            </div>
            <div class="nav-item">
                <p class="nav-text">Destination</p>
                <img class="nav-icon" src="https://via.placeholder.com/12x12" alt="Icon" />
            </div>
            <div class="nav-item">
                <p class="nav-text">Pages</p>
                <img class="nav-icon" src="https://via.placeholder.com/12x12" alt="Icon" />
            </div>
            <div class="nav-item">
                <p class="nav-text">Contact</p>
            </div>
            <div class="book-trip">
                <p>Book Trip</p>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.navbar {
    width: 1920px;
    height: 74px;
}

.navbar-content {
    width: 1920px;
    height: 74px;
    padding: 8px 300px;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.10);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 1320px;
    display: flex;
    align-items: center;
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-item {
    display: flex;
    align-items: flex-end;
    margin: 0 12px;
}

.nav-text {
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.65);
}

.nav-icon {
    width: 12px;
    height: 12px;
    border-radius: 8px;
    margin-left: 4px;
}

.book-trip {
    padding: 9px 21px;
    background-color: rgba(38, 165, 158, 1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.book-trip p {
    font-size: 14px;
    line-height: 24px;
    color: white;
    text-align: center;
}

</style>