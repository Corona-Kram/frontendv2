<script>
    import { goto } from '@sapper/app';
    export let extended = false;

    const MAX_LENGTH = 50;

    let messageDefault = 'Et kram fra mig til dig';
    let message = messageDefault;
    let messageError = undefined;
    let messageSuccess = 'right';
    let name = '';
    let receiver = '';

    let emojis = ["🙂", "🥰", "🌞", "💖"]

    async function verifyMessage() {
        if (message.length + name.length > MAX_LENGTH) {
            message = message.substring(0, MAX_LENGTH - name.length);
        }
    }

    async function verifyMessageName() {
        if (message.length + name.length > MAX_LENGTH) {
            name = name.substring(0, MAX_LENGTH - message.length)
        }
    }

    async function handleSubmit() {

        const json_message = { text: message };
        if (name) {
            json_message['name'] = name;
        }
        if (receiver) {
            json_message['receiver'] = "" + receiver;
        }

        const response = await fetch("/kram/",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json_message)
            });


        goto('kramSent');
    }

    function addEmoji(emoji) {
        return () => {
            if (message.length < MAX_LENGTH - 1) {
                const last = message.substring(message.length - 1, message.length)
                console.log(last)
                if (last == " ") {
                    message += emoji
                } else {
                    message += " " + emoji
                }
            }
        }
    }

</script>



<style>
    .kram-btn {
        border-radius: 9px;
        text-align: center;
        height: auto;
        margin-bottom: 20px;
        padding: 1vw 32px;
        font-size: 3.5vw;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    /* label color */
    .input-field label {
        color: #f9f9f9;
    }

    .input-field *::placeholder {
        color: #d1d1d1;
    }

    /* label focus color */
    .input-field input[type=text]:focus+label {
        color: #f9f9f9;
    }

    /* label underline focus color */
    .input-field input[type=text]:focus {
        border-bottom: 1px solid #f9f9f9;
        box-shadow: 0 1px 0 0 #f9f9f9;
    }

    /* valid color */
    .input-field input[type=text].valid {
        border-bottom: 1px solid #f9f9f9;
        box-shadow: 0 1px 0 0 #f9f9f9;
    }

    /* invalid color */
    .input-field input[type=text].invalid {
        border-bottom: 1px solid #f9f9f9;
        box-shadow: 0 1px 0 0 #f9f9f9;
    }

    /* icon prefix focus color */
    .input-field .prefix.active {
        color: #f9f9f9;
    }

    textarea {
        border: 2px solid rgba(0, 0, 0, 0.4);
        border-radius: 7px;
        height: 5rem;
        padding: 0.7rem;
    }

    .info {
        display: inline-block;
    }

    .emoji {
        margin: 0 0.4rem;
    }
</style>


{#if extended}
<div class="hide-on-med-and-down">
    <div class="row left-align">
        <div class="input-field col s12 m9">
            <i class="material-icons prefix white-text">phone</i>
            <input placeholder="Skriv et telefonnummer her" type="number"
                class="validate white-text" bind:value={receiver}>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12 m9">
            <i class="material-icons prefix white-text">mode_edit</i>
            <input placeholder="Skriv dit navn her" type="text" class="validate white-text"
                bind:value={name} on:input={verifyMessageName}>
        </div>
    </div>
</div>
<div class="hide-on-large-only">
    <div class="row left-align">
        <div class="row">
            <div class="input-field col s12">
                <input placeholder="Skriv et telefonnummer her" type="number"
                    class="validate white-text" bind:value={receiver}>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <input placeholder="Skriv dit navn her" type="text" class="validate white-text"
                    bind:value={name} on:input={verifyMessageName}>
            </div>
        </div>
        </div>
</div>
{/if}

<div class="row hide-on-med-and-down left-align valign-wrapper">
    <div class="input-field col m9">
        <i class="material-icons prefix white-text">mode_edit</i>
        <input placeholder="{messageDefault}" type="text" class="validate white-text" bind:value={message}
            on:input={verifyMessage}>
            
        <div class="valign-wrapper">
            <div class="col s2 offset-s2">Smiley:</div>
            <div class="col s8">
                {#each emojis as emoji}
                    <a class="waves-effect waves-light btn emoji col s2 blue darken-2" on:click={addEmoji(emoji)}>{emoji}</a>
                {/each}
            </div>
        </div>
    </div>
    <div class="col m3">
        <span class="info">
        <abbr title="Der er desværre en begrænsning på antallet af tegn vi kan sende gennem SMS">{
            message.length + name.length } ud af 50 tegn <i class="material-icons">info</i></abbr>
        </span>
    </div>
</div>
<div class="row hide-on-large-only left-align">
    <div class="input-field col s12 valign-wrapper ">
        <textarea placeholder="{messageDefault}" type="text" rows="3" class="validate white-text" bind:value={message}
            on:input={verifyMessage}></textarea>
    </div>
    <div class="valign-wrapper col s12">
        <div class="col s12">
            {#each emojis as emoji}
                <a class="waves-effect waves-light btn emoji col s2 blue darken-2" on:click={addEmoji(emoji)}>{emoji}</a>
            {/each}
        </div>
    </div>
    <div class="col s10 offset-s2">
        <abbr title="Der er desværre en begrænsning på antallet af tegn vi kan sende gennem SMS">{
            message.length + name.length } ud af 50 tegn <i class="material-icons">info</i></abbr>
    </div>
</div>
<div class="center-align white-text">
    <a href="/" class="waves-effect waves-light btn btn-large kram-btn blue darken-2 white-text {(extended && (!name || !receiver)) ? 'disabled' : ''}"
        on:click={handleSubmit}>SEND ET KRAM</a>
</div>