<script>
    import { onMount } from 'svelte';
    
    let eboard_members = [
        {
            "name": "Hupey",
            "position": "President",
            "image": "https://source.unsplash.com/1600x900/?people"
        },
        {
            "name": "Alex",
            "position": "Vice President",
            "image": "https://source.unsplash.com/1600x900/?person"
        },
        {
            "name": "Jordan",
            "position": "Secretary",
            "image": "https://source.unsplash.com/1600x900/?individual"
        },
        {
            "name": "Taylor",
            "position": "Treasurer",
            "image": "https://source.unsplash.com/1600x900/?man"
        },
        {
            "name": "Morgan",
            "position": "Events Coordinator",
            "image": "https://source.unsplash.com/1600x900/?woman"
        },
        {
            "name": "Chris",
            "position": "Public Relations",
            "image": "https://source.unsplash.com/1600x900/?worker"
        },
        {
            "name": "Jamie",
            "position": "Social Media Manager",
            "image": "https://source.unsplash.com/1600x900/?person,smiling"
        },
        {
            "name": "Pat",
            "position": "Tech Lead",
            "image": "https://source.unsplash.com/1600x900/?developer"
        },
        {
            "name": "Katie",
            "position": "Webmaster",
            "image": "https://source.unsplash.com/1600x900/?developer"
        },
        {
            "name": "Matthew",
            "position": "Dungeon Master",
            "image": "https://source.unsplash.com/1600x900/?developer"
        },
    ];

    let first_name = "";
    let last_name = "";
    let email = "";
    let message = "";

    async function submitForm() {
        const response = await fetch('/about', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                message
            })
        });
        
        // Ask team if this is the correct way to handle the response
        if (response.ok) {
            alert('Email sent successfully');
        } else {
            alert('Failed to send email');
        }
    }

</script>

<!-- ColorStack UF intro -->
<div style="background-image: url('https://source.unsplash.com/1600x900/?people');">
    <div class="relative grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 mt-12 laptop:mt-0 gap-[60px] tablet:gap-[70px] laptop:gap-[20px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:max-h-[600px] laptop:min-h-[550px] laptop:justify-items-end min-[1150px]:px-[50px] desktop:px-[30px]">
        <div class="flex flex-col shrink justify-center laptop:justify-normal laptop:mt-20 desktop:mt-28 items-center laptop:justify-self-center w-3/5 bg-cover bg-center">
            <div class="bg-body-background-blue p-12">
                <h1 class="text-white text-[1.4rem] pb-4 font-gotham-medium">ColorStack UF is a team committed to...</h1>
                <p class="text-white font-archer"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. A labore mollitia, illo sint eius vero nulla quos sequi, doloribus temporibus libero, enim soluta dolore voluptates qui natus possimus suscipit unde.</p>
                <!-- Need to change to standard -->
                <button class="text-black text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium">View Link Tree</button>
            </div>
        </div>
    </div>
</div>

<!-- About ColorStack National -->
<div class="bg-body-background-white px-12 py-[10rem]">
    <div class = "bg-body-background-blue p-[4rem]">
        <div class="items-center relative grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 gap-x-12">
            <div class="w-full">
                <img src="https://source.unsplash.com/1600x1200/?people" alt="People"/>
            </div>

            <div class="flex flex-col justify-center items-center text-center">
                <h1 class="text-white text-[1.4rem] py-8 font-gotham-medium">About ColorStack National</h1>
                <p class="text-white font-archer"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. A labore mollitia, illo sint eius vero nulla quos sequi, doloribus temporibus libero, enim soluta dolore voluptates qui natus possimus suscipit unde.</p>
                <!-- Need to change to standard -->
                <button class="w-1/2 text-black text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium">Become a National Member</button>
            </div>
        </div>
    </div>
</div>

<!-- Eboard Grid -->
<div class="bg-body-background-blue py-12 px-12">
    <div class="flex flex-col justify-center items-center font-gotham-medium pb-12">
        <h1 class="text-white text-[2rem] text-center">Meet the E-Board</h1>
    </div>
    <div class="grid grid-cols-2 laptop:grid-cols-4 laptop:col-start-2 col-span-5 gap-x-7 gap-y-12">
        {#each eboard_members as member}
            <div class="flex flex-col justify-center items-center text-white text-[1.4rem] font-gotham-medium">
                <img src={member.image} alt="Photo of {member.name}" class="w-[20ch] h-[20ch] object-cover rounded-md" />
                <h1 class="py-5">{member.name}</h1>
                <p class="text-sm text-center">{member.position}</p>
            </div>
        {/each}
    </div>
</div>

<!-- Contact Us -->
<div class="bg-body-background-light-blue px-[10rem] py-[10rem] mb-7">
    <div class="grid grid-cols-2">
        <div class="text-black">
            <!-- Need to ask team on what sizes these should be (Are there ones for this part specifically?) -->
            <h1 class="text-[1.4rem] pb-8 font-gotham-medium">Contact Us</h1>
            <p class="font-archer"> If you have any questions or concerns don't hesitate to contact us.</p>
        </div>
        
        <div class="justify-center items-center w-full">
            <input type="text" placeholder="First Name" class="w-full h-[3rem] mt-4 rounded-md border-2 px-3" bind:value={first_name} />
            <input type="text" placeholder="Last Name" class="w-full h-[3rem] mt-4 rounded-md border-2 px-3" bind:value={last_name}>
            <input type="text" placeholder="Email" class="w-full h-[3rem] mt-4 rounded-md border-2 px-3" bind:value={email} />
            <textarea placeholder="Message" class="w-full h-[12rem] mt-4 rounded-md border-2 px-3 py-3" bind:value={message} />
            <!-- Need to ask team on what color the button transition should be -->
            <button class="w-full text-white bg-body-background-blue transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-black duration-300 py-4 px-7 rounded mt-4 font-gotham-medium" on:click={submitForm}>Submit</button>
        </div>
    </div>
</div>

