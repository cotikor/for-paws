import React from "react";
import {
	FormContainer,
	FormHeading,
	FormSubHeading,
	FormSection,
	FormLabel,
	FormInputContainer,
	FormShortInput,
	FormLongInput,
	FormDropdownInput,
	FormDropdownOption,
	FormRadioContainer,
	FormRadioInput,
	FormSubLabel,
	FormSubmitButton,
} from "../../styles/form";

export const FormComponent = ({ view, name, setMode }) => {

	return (
		<FormContainer>
			<FormHeading>
				{view === "adopt" ? "Adoption" : "Foster"} Application
			</FormHeading>
			<span style={{display:`${view === 'adopt' ? 'block': 'none'}` }}>
				<FormSection>
					<FormLabel>Pet Name</FormLabel>
					<FormInputContainer>
						<FormShortInput type="text" value={name}></FormShortInput>
					</FormInputContainer>
				</FormSection>
			</span>
			<FormSection>
				<FormLabel>Full Name</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>First Name</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>Last Name</FormSubLabel>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Age</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>E-mail</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Address</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>Street Address</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>Street Address Line 2</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>City</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>State</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>Zip Code</FormSubLabel>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Phone Number</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Do you live in a:</FormLabel>
				<FormInputContainer>
					<FormDropdownInput>
						<FormDropdownOption></FormDropdownOption>
						<FormDropdownOption>House</FormDropdownOption>
						<FormDropdownOption>Townhouse</FormDropdownOption>
						<FormDropdownOption>Condo</FormDropdownOption>
						<FormDropdownOption>Apartment</FormDropdownOption>
						<FormDropdownOption>Duplex</FormDropdownOption>
						<FormDropdownOption>Other</FormDropdownOption>
					</FormDropdownInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Do you:</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='housetype' type="radio"></FormRadioInput>
						<FormSubLabel>Own</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='housetype' type="radio"></FormRadioInput>
						<FormSubLabel>Rent Alone</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='housetype' type="radio"></FormRadioInput>
						<FormSubLabel>Rent With Roommates</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					If Renting: Please provide landlord and roommate contact information
				</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					Please List all People Living in the Household (Include Name,
					Relationship, and Age)
				</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Household Setting</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='setting' type="radio"></FormRadioInput>
						<FormSubLabel>Rural</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='setting' type="radio"></FormRadioInput>
						<FormSubLabel>Suburban</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='setting' type="radio"></FormRadioInput>
						<FormSubLabel>Urban</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Describe your home's activity level</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='activity' type="radio"></FormRadioInput>
						<FormSubLabel>Busy/Noisy</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='activity' type="radio"></FormRadioInput>
						<FormSubLabel>Moderate Activity</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='activity' type="radio"></FormRadioInput>
						<FormSubLabel>Quiet</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					Does Anyone in your Household have Allergies to Animals?
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='allergies' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='allergies' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Do all members of your household agree to fostering?
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='agree'  type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='agree' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					Please list any current/previous pets(Please include Name, Species,
					Breed, Age)
				</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>Do you have a preference in the sex of a foster? </FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='sex'  type="radio"></FormRadioInput>
						<FormSubLabel>Male</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='sex'  type="radio"></FormRadioInput>
						<FormSubLabel>Female</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='sex'  type="radio"></FormRadioInput>
						<FormSubLabel>No Preference</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>Do you have a preference in the age of a foster? </FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='age'  type="radio"></FormRadioInput>
						<FormSubLabel>Puppy (up to 6 months)</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='age'   type="radio"></FormRadioInput>
						<FormSubLabel>Adolescence (6 months - 2 years)</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='age'   type="radio"></FormRadioInput>
						<FormSubLabel>Adult (2 years - 8 years)</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='age'  type="radio"></FormRadioInput>
						<FormSubLabel>Senior (8+ years)</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					What size dog are you willing to foster? (Check all that apply){" "}
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='size'  type="radio"></FormRadioInput>
						<FormSubLabel>Small</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='size' type="radio"></FormRadioInput>
						<FormSubLabel>Medium</FormSubLabel>
					</FormRadioContainer>
					<FormRadioContainer>
						<FormRadioInput name='size' type="radio"></FormRadioInput>
						<FormSubLabel>Large</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Please describe the type of dog you are willing to foster (Please
					include breed, coat length, personality traits, energy level) We
					always want to make sure we have the best fit for our foster homes.{" "}
				</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Are you willing to take your foster dog to vet appointments at a
					convenient time for you?{" "}
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='vet' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='vet' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>{" "}
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Do you drive or have access to a vehicle to bring your foster to
					events and appointments
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='transport' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='transport' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Are you willing and able to medicate your foster, even if it just a
					monthly heartworm preventative?
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='medication' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='medication' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					We cannot guarantee a dog to be housebroken, are you equipped to train
					with love and patience?{" "}
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='housebroken' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='housebroken' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Have you had any experience with with an emotionally or physically
					neglected or abused dog?
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='experience' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='experience' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>If Yes please explain</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					Are you willing to use a crate for a dog if recommended?{" "}
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='crate' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='crate'  type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Do you have a fully fenced yard? </FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput  name='yard' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='yard' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					If fenced, please give details on height, material, # of gates, are
					gates locked or lockable?
				</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					How many hours in a day would the foster be left alone?{" "}
				</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection view={view}>
				<FormLabel>
					What are you plans to exercise your foster? Please list any parks near
					by or trails, how many walks a day, approximate length, and activities
					such as agility.{" "}
				</FormLabel>
				<FormInputContainer>
					<FormLongInput cols="40" rows="6"></FormLongInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>
					We require 2 personal references with names, addresses, phone numbers
					and how related. We prefer it not to be all relatives. Are you ok with
					this?{" "}
				</FormLabel>
				<FormInputContainer>
					<FormRadioContainer>
						<FormRadioInput name='references' type="radio"></FormRadioInput>
						<FormSubLabel>Yes</FormSubLabel>
					</FormRadioContainer>{" "}
					<FormRadioContainer>
						<FormRadioInput name='references' type="radio"></FormRadioInput>
						<FormSubLabel>No</FormSubLabel>
					</FormRadioContainer>
				</FormInputContainer>
			</FormSection>
			<FormSubHeading>Reference #1</FormSubHeading>
			<FormSection>
				<FormLabel>Full Name</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>First Name</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>Last Name</FormSubLabel>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Age</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>E-mail</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Phone Number</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Relationship</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSubHeading>Reference #2</FormSubHeading>
			<FormSection>
				<FormLabel>Full Name</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>First Name</FormSubLabel>
					<FormShortInput type="text"></FormShortInput>
					<FormSubLabel>Last Name</FormSubLabel>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Age</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>E-mail</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Phone Number</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSection>
				<FormLabel>Relationship</FormLabel>
				<FormInputContainer>
					<FormShortInput type="text"></FormShortInput>
				</FormInputContainer>
			</FormSection>
			<FormSubmitButton onClick={ e=> {setMode('application')}}>Submit</FormSubmitButton>
		</FormContainer>
	);
};
