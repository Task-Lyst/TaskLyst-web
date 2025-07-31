<script>
    export let delay;
    export let icon;
    export let title;
    export let text;
</script>

<div class="col-xl-3 col-lg-3 col-sm-6">
    <div class="ud-single-feature wow fadeInUp" data-wow-delay={delay}>
        <div class="ud-feature-icon">
            <i class={icon} />
        </div>
        <div class="ud-feature-content">
            <h3 class="ud-feature-title">{title}</h3>
            <p class="ud-feature-desc">
                {text}
            </p>
            <!-- <a href={'#'} class="ud-feature-link"> Learn More </a> -->
        </div>
    </div>
</div>