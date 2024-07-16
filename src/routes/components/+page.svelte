<script>
	import { ContentSection, Alert, Button, Input, Statistics } from "$lib";
	import { RiArrowUpSFill, RiArrowDownSFill } from "svelte-remixicon";
</script>

<div class="flex flex-col gap-4">
	<ContentSection title="Alerts">
		<div class="flex flex-col gap-4">
			<div>
				<p class="mb-2 text-sm">Default Alert</p>
				<Alert alertContent="This is a default alert" />
			</div>
			<div>
				<p class="mb-2 text-sm">Success Alert with Dismiss Button and Icon</p>
				<Alert
					alertType="success"
					alertContent="This is a Success Alert"
					alertIcon="RiCheckboxCircleFill"
					isAlertDismissable={true}
				/>
			</div>
			<div>
				<p class="mb-2 text-sm">Warning Alert with Icon</p>
				<Alert
					alertType="warning"
					alertContent="This is a Warning Alert"
					alertIcon="RiCheckboxCircleFill"
					isAlertDismissable={false}
				/>
			</div>
			<div>
				<p class="mb-2 text-sm">Danger Alert with Dismiss Button</p>
				<Alert alertType="danger" alertContent="This is a Warning Alert" isAlertDismissable={true} />
			</div>
		</div>
	</ContentSection>

	<ContentSection title="Buttons">
        <p class="mb-2"> Default Button Size</p>
        <div class="grid grid-cols-6 gap-4">
            <Button buttonColor="primary" buttonText="Primary Button" />
            <Button buttonColor="primary" buttonText="Primary Button with Icon" buttonIcon="RiCheckboxCircleFill" />

            <Button buttonColor="secondary" buttonText="Secondary Button with Icon"  />
            <Button buttonColor="secondary" buttonText="Secondary Button with Icon" buttonIcon="RiCheckboxCircleFill"  />

            <Button buttonColor="success" buttonText="Success Button" />
            <Button buttonColor="success" buttonText="Success Button with Icon" buttonIcon="RiHome2Line"  />

            <Button buttonColor="warning" buttonText="Warning Button" />
            <Button buttonColor="warning" buttonText="Warning Button with Icon" buttonIcon="RiMessage2Fill"  />

            <Button buttonColor="danger" buttonText="Danger Button" />
            <Button buttonColor="danger" buttonText="Danger Button with Icon" buttonIcon="RiMessage2Fill"  />
        </div>
    </ContentSection>

    <ContentSection title="Input Fields">
        <div class="grid grid-cols-4 gap-4">
            <Input type="email" name="email" value="text@xyz.com" label="Email, Validation Failed" validationRequired={true} validationPassed={false} />
            <Input type="email" name="email" value="text@xyz.com" label="Email, Validation Passed" validationRequired={true} validationPassed={true} />
            <Input type="password" name="Password" value="Password" label="Password, Validation Failed" validationRequired={true} validationPassed={false} />
            <Input type="password" name="Password" value="Password" label="Password, Validation Passed" validationRequired={true} validationPassed={true} />

            <Input type="text" name="userName" value="John Doe" label="Text" />
            <Input type="date" name="date" value="" label="Date" />
            <Input type="time" name="time" value="" label="Time" />
        </div>
    </ContentSection>

    <ContentSection title="Statistic Cards">
        <div class="grid grid-cols-4 gap-4">
            <Statistics value=500 description="Standard Users"/>
            <Statistics value=100 description="Admin Users"/>
            <Statistics value=100 description="Admin Users">
                <span class="flex items-center" slot="showChange">
                    <RiArrowUpSFill class="text-emerald-600 h-8 w-8" />
                    17%
                </span>
            </Statistics>
            <Statistics value=100 description="Admin Users">
                <span class="flex items-center" slot="showChange">
                    <RiArrowDownSFill class="text-red-600 h-8 w-8" />
                    23%
                </span>
            </Statistics>
        </div>
    </ContentSection>
</div>
