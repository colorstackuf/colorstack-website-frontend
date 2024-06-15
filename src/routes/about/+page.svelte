<script>
    import { onMount } from 'svelte';
    
    let eboard_members = [
        {
            "name": "Carson Johnson",
            "position": "President",
            "image": "e-board/Carson_Johnson.png"
        },
        {
            "name": "Gabriel Castejon",
            "position": "Vice President",
            "image": "e-board/Gabriel_Castejon.png"
        },
        {
            "name": "Yakub Mungai",
            "position": "Treasurer",
            "image": "e-board/Yakub_Mungai.png"
        },
        {
            "name": "Kacie Ross",
            "position": "VP of Marketing",
            "image": "e-board/Kacie_Ross.png"
        },
        {
            "name": "Bryan Hernandez-Sanchez",
            "position": "VP of Events",
            "image": "e-board/Bryan_Hernandez-Sanchez.png"
        },
        {
            "name": "Yohance de Souza",
            "position": "Administration Chair",
            "image": "e-board/Yohance_de_Souza.png"
        },
        {
            "name": "Mya Ramsey",
            "position": "Physical Marketing Coordinator",
            "image": "e-board/Mya_Ramsey.png"
        },
        {
            "name": "Soraya Sardine",
            "position": "Graphic Design Coordinator",
            "image": "e-board/Soraya_Sardine.png"
        },
        // {
        //     "name": "Natahja Graddy",
        //     "position": "Community Events Coordinator",
        //     "image": "e-board/Natahja_Graddy.png"
        // },
        {
            "name": "Yonas Worku",
            "position": "Career Events Coordinator",
            "image": "e-board/Yonas_Worku.png"
        },
        {
            "name": "Matthew DeGuzman",
            "position": "Technical Events Coordinator",
            "image": "e-board/Matthew_DeGuzman.png"
        },
        {
            "name": "Alex Huper",
            "position": "Academic Programs Coordinator",
            "image": "e-board/Alex_Huper.png"
        },
        {
            "name": "Josue Vicente",
            "position": "Academic Events Coordinator",
            "image": "e-board/Josue_Vicente.png"
        },
        {
            "name": "Abigail Erefah",
            "position": "Digital Marketing Coordinator",
            "image": "e-board/Abigail_Erefah.png"
        },
        {
            "name": "Dr. Sanethia Thomas",
            "position": "Faculty Advisor",
            "image": "e-board/Sanethia_Thomas.png"
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
<div style="background-image: url('graphics/about-intro.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
    <div class="relative grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 mt-12  laptop:mt-0 gap-[60px] tablet:gap-[70px] laptop:gap-[20px] px-mobile-padding-x tablet:px-tablet-padding-x laptop:max-h-[600px] laptop:min-h-[550px] laptop:justify-items-end min-[1150px]:px-[50px] desktop:px-[30px]">
        <div class="flex flex-col shrink justify-center laptop:justify-normal laptop:mt-20 desktop:mt-28 laptop:justify-self-center laptop:w-3/5 bg-cover bg-center">
            <div class="bg-body-background-blue p-12 rounded-lg mb-12 text-center laptop:text-left laptop:w-3/5 tablet:w-1/3">
                <h1 class="text-white text-[1.4rem] pb-4 font-gotham-medium">ColorStack UF is a team committed to...</h1>
                <p class="text-white font-archer"> Investing in the futures of those left behind every day. We’re a tech student organization cultivating the strongest campus community of its kind to deliver community building, academic support, and career development opportunities.</p>
                <!-- Need to change to standard -->
                <button class="text-black text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium">View Link Tree</button>
            </div>
        </div>
    </div>
</div>

<!-- About ColorStack National -->
<div class="laptop:bg-body-background-white bg-body-background-blue laptop:px-16 laptop:py-40 py-6 px-8">
    <div class = "bg-body-background-blue rounded-lg laptop:p-16">
        <div class="relative grid grid-cols-1 laptop:col-start-2 laptop:grid-cols-2 gap-x-12">
            <div>
                <img src="graphics/colorstack_students.png" alt="People" class="w-full rounded-lg"/>
            </div>

            <div class="flex flex-col items-center text-center">
                <h1 class="text-white text-xl laptop:text-4xl pt-8 font-gotham-medium pb-4 laptop:pb-12">About ColorStack National</h1>
                <p class="text-white font-archer text-lg"> The ColorStack Family is our community of 10,000+ Black and Latinx Computer Science students from 900+ schools nationwide. We’re committed to providing community building, academic support, and career development year-round. Through our active Slack, monthly Fam Fridays, and partnerships with 70+ top tech companies. </p>
                <!-- Need to change to standard -->
                <button class="laptop:w-1/2 text-black text-center bg-colorstackuf-orange transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-white duration-300 py-4 px-7 rounded-3xl mt-8 laptop:mt-16 font-gotham-medium">Become a National Member</button>
            </div>
        </div>
    </div>
</div>

<!-- Eboard Grid -->
<div class="bg-body-background-blue py-12 laptop:px-12 px-6">
    <div class="flex flex-col justify-center items-center font-gotham-medium pb-12">
        <h1 class="text-white text-[2rem] text-center">Meet the E-Board</h1>
        <p class="text-white text-center pt-3">2023-2024</p>
    </div>
    <div class="grid grid-cols-2 laptop:grid-cols-4 laptop:col-start-2 col-span-5 gap-x-7 gap-y-12">
        {#each eboard_members as member}
            <div class="flex flex-col justify-center items-center text-white text-[1.4rem] font-gotham-medium">
                <img src={member.image} alt="Photo of {member.name}" class="w-48 h-48 tablet:w-64 tablet:h-64 laptop:w-80 laptop:h-80 object-cover rounded-md" />
                <h1 class="py-2 text-base text-center laptop:text-2xl">{member.name}</h1>
                <p class="text-xs text-center laptop:text-base">{member.position}</p>
            </div>
        {/each}
    </div>
</div>

<!-- Contact Us -->
<div class="bg-body-background-light-blue laptop:px-24 laptop:py-36 py-12 px-12 mb-7">
    <div class="grid grid-cols-1 laptop:grid-cols-2 laptop:cols-start-2">
        <div class="text-black">
            <!-- Need to ask team on what sizes these should be (Are there ones for this part specifically?) -->
            <h1 class="text-[1.4rem] pb-8 font-gotham-medium">Contact Us</h1>
            <p class="font-archer"> If you have any questions or concerns don't hesitate to contact us.</p>
        </div>
        
        <div class="justify-center items-center w-full">
            <input type="text" placeholder="First Name" class="w-full h-12 mt-4 rounded-md border-2 px-3" bind:value={first_name} />
            <input type="text" placeholder="Last Name" class="w-full h-12 mt-4 rounded-md border-2 px-3" bind:value={last_name}>
            <input type="text" placeholder="Email" class="w-full h-12 mt-4 rounded-md border-2 px-3" bind:value={email} />
            <textarea placeholder="Message" class="w-full h-48 mt-4 rounded-md border-2 px-3 py-3" bind:value={message} />
            <!-- Need to ask team on what color the button transition should be -->
            <button class="w-full text-white bg-body-background-blue transition-bg-color transition-color hover:bg-colorstackuf-blue hover:text-black duration-300 py-4 px-7 rounded mt-4 font-gotham-medium" on:click={submitForm}>Submit</button>
        </div>
    </div>
</div>

