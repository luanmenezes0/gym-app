<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  export let { exercises, muscles, equipments } = data;

  let search = '';
  let muscleGroup = 'All';
  let equipment = 'All';

  $: console.log(muscleGroup);

  $: filteredExercises =
    exercises?.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase()) &&
        (muscleGroup === 'All' ? true : exercise.muscle === muscleGroup) &&
        (equipment === 'All' ? true : exercise.equipment === equipment)
    ) ?? [];

  let dialog: HTMLDialogElement;

  function openDialog() {
    dialog.showModal();
  }

  function closeDialog() {
    dialog.close();
  }
</script>

<button on:click={openDialog}>Create Workout</button>

<dialog bind:this={dialog}>
  <div class="modal-body">
    <div class="modal-header">
      <h1 class="modal-title">Select an exercise</h1>
      <button on:click={closeDialog}>X</button>
    </div>
    <div class="modal-content">
      <input
        id="search"
        type="search"
        name="search"
        bind:value={search}
        class="search-input"
        placeholder="search for an exercise"
      />
      <div class="selects">
        <select bind:value={muscleGroup}>
          <option value="All" selected>All group muscles</option>
          {#each muscles as muscle}
            <option value={muscle}>
              {muscle}
            </option>
          {/each}
        </select>
        <select bind:value={equipment}>
          <option value="All" selected>Any equipment</option>
          {#each equipments as e}
            <option value={e}>
              {e}
            </option>
          {/each}
        </select>
      </div>
      <form class="exercises-form">
        {#each filteredExercises as exercise}
          <div class="exercises-form__options">
            <input
              type="checkbox"
              id={exercise.id.toString()}
              name={exercise.name}
              value={exercise.name}
            />
            <label for={exercise.id.toString()}>
              <div>{exercise.name}</div>
              <div>{exercise.muscle}</div>
            </label>
          </div>
        {/each}
      </form>
    </div>
    <div class="modal-footer">
      <button>Cancel</button>
      <button>Add</button>
    </div>
  </div>
</dialog>

<style>
  .modal-body {
    /* padding-block: 1rem; */
    width: 800px;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-content {
    margin-top: 1rem;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
  }

  .search-input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .exercises-form {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow-y: scroll;
  }

  .exercises-form__options {
    display: flex;
    margin-bottom: 0.5rem;
  }

  .selects {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 1rem;
  }
  .selects select {
    width: 100%;
  }
</style>
