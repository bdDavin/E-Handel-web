<template>
    <section>
        <!-- <button class="button block" @click="isActive = true" :disabled="isActive">Show</button> -->
        <b-notification
            auto-close type="is-primary"
            :active.sync="isActive"
            aria-close-label="Close notification">
            <div class="container has-text-center" center>
                <slot></slot>
            </div>
        </b-notification>
    </section>
</template>

<script>
    export default {
        name: 'MessageBox',
        data() {
            return {
                isActive: false
            }
        }

    }
</script>