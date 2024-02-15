import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

export default function AddTrainer() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    TrainerName: '',
    selectedTrainer: ''
  });

  const cancelButtonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setOpen(false);
  };

  return (
    <>
      <div className="text-start">
        <button
          type="button"
          className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setOpen(true)}
        >
          Add Trainer
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
          initialFocus={cancelButtonRef}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-white rounded-md max-w-5xl mx-auto mt-20 p-8">
              <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">Add Trainer</Dialog.Title>
              <div className="space-y-7">
                <div>
                  <label htmlFor="TrainerName" className="block text-sm  font-medium text-gray-700">Trainer Name</label>
                  <input
                    type="text"
                    id="TrainerName"
                    name="TrainerName"
                    value={formData.TrainerName}
                    onChange={handleChange}
                    placeholder='Enter Trainer Name'

                    className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="selectedTrainer" className="block text-sm font-medium text-gray-700">Select Trainer</label>
                  <select
                    id="selectedTrainer"
                    name="selectedTrainer"
                    value={formData.selectedTrainer}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    {/* Options for selecting Trainer */}
                    <option value=""  className='px-4 py-2'>Select...</option>
                    <option value="Trainer1" className='px-4 py-2'>Trainer 1</option>
                    <option value="Trainer2"  className='px-4 py-2'>Trainer 2</option>
                    <option value="Trainer3"  className='px-4 py-2'>Trainer 3</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-7">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
