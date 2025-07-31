<script>
	import Feature from './feature.svelte';

	export let id;
</script>

<section {id} class="ud-features">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="ud-section-title">
					<span>Features</span>
					<h2>Designed for focus and flexibility</h2>
					<p>
						Everything you need to manage tasks without the clutter: cross-platform support,
						offline-first design, and full control over how you organize your work
					</p>
				</div>
			</div>
		</div>
		<div class="row">
			<Feature
				delay=".1s"
				icon="lni lni-laptop"
				title="Cross-Platform & Native"
				text="Runs seamlessly on Linux, Windows, and macOS with a system tray for quick access."
			/>
			<Feature
				delay=".15s"
				icon="lni lni-layers"
				title="Customizable Task Management"
				text="Define task types, add tags, set priorities, and configure your own task table layout."
			/>
			<Feature
				delay=".2s"
				icon="lni lni-shield"
				title="Offline-First, No Accounts Needed"
				text="Your data stays on your device. Backup and restore locally whenever you need."
			/>
			<Feature
				delay=".25s"
				icon="lni lni-bulb"
				title="Planned Enhancements"
				text="Future updates may include smart AI-powered task entry, reminders, calendar sync, and shared task lists."
			/>
		</div>
	</div>
</section>
