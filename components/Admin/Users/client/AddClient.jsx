import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

export default function AddClient() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    selectedClient: ''
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
          Add Client
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
              <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">Add Client</Dialog.Title>
              <div className="space-y-7">
                <div>
                  <label htmlFor="clientName" className="block text-sm  font-medium text-gray-700">Client Name</label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    placeholder='Enter Client Name'
                    className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="selectedClient" className="block text-sm font-medium text-gray-700">Select Client</label>
                  <select
                    id="selectedClient"
                    name="selectedClient"
                    value={formData.selectedClient}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    {/* Options for selecting client */}
                    <option value=""  className='px-4 py-2'>Select...</option>
                    <option value="client1" className='px-4 py-2'>Client 1</option>
                    <option value="client2"  className='px-4 py-2'>Client 2</option>
                    <option value="client3"  className='px-4 py-2'>Client 3</option>
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
