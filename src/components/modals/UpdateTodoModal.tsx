import CloseBtn from "@/assets/CloseBtn";
import Ellipse from "@/assets/Ellipse";
import EllipseSelected from "@/assets/EllipseSelected";
import HorizontalLine from "@/assets/HorizontalLine";
import Keyboard from "@/assets/Keyboard";
import Pin from "@/assets/Pin";
import Quote from "@/assets/Quote";
import { useModalContext, useTodoContext } from "@/context";
import React, { useEffect, useState } from "react";
import Sheet from "react-modal-sheet";

const UpdateTodoModal = () => {
  const { updateTodoModal, setUpdateTodoModal, selectedTodo, setSelectedTodo } =
    useModalContext();
  const { updateTodo } = useTodoContext();
  const [isChecked, setIsChecked] = useState<boolean>();
  const [description, setDescription] = useState<string>();
  const [focusInput, setFocusInput] = useState(false);

  useEffect(() => {
    setIsChecked(selectedTodo.pinned);
    setDescription(selectedTodo.description);
  }, [selectedTodo, selectedTodo.pinned]);

  const closeModal = () => {
    setDescription("");
    setIsChecked(false);
    setUpdateTodoModal(false);
    setSelectedTodo({});
  };

  const updateCurrentTodo = () => {
    let values = {
      id: selectedTodo.id,
      pinned: isChecked,
      description: description,
    };

    updateTodo(values);
    setUpdateTodoModal(false);
    setDescription("");
    setIsChecked(false);
    setSelectedTodo({});
  };

  return (
    <>
      <Sheet
        isOpen={updateTodoModal}
        onClose={closeModal}
        detent="content-height"
      >
        <Sheet.Container style={{ height: "642px" }}>
          {/* <Sheet.Backdrop
            style={{ backgroundColor: "transparent" }}
            onTap={() => setOpen(false)}
          /> */}
          <Sheet.Header>
            <div className="my-4 left-0 right-0 flex items-center justify-center">
              <Quote color="orange" />
              <p
                style={{ color: "rgba(255, 121, 100, 1)" }}
                className="mx-3 h-5 not-italic font-semibold text-lg leading-5 text-center"
              >
                Update a task
              </p>
            </div>
            <div onClick={closeModal} className="absolute top-4 right-4">
              <CloseBtn />
            </div>
            <HorizontalLine />
          </Sheet.Header>
          <Sheet.Content>
            <div className="m-8 flex flex-col">
              <div>
                <input
                  onFocus={() => setFocusInput(true)}
                  onBlur={() => setFocusInput(false)}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Task description"
                  type="text"
                  style={{ gap: "17px", border: "1.5px solid #999C9F" }}
                  className="flex box-border items-start h-12 bg-white rounded p-4 w-full outline-none"
                />
              </div>

              <div className="my-8 flex items-center">
                <Pin />
                <p className="h-5 not-italic font-normal text-sm leading-5 text-black mx-2">
                  Pin on the top
                </p>
                <div
                  onClick={() => setIsChecked(!isChecked)}
                  className="ml-auto"
                >
                  {isChecked ? <EllipseSelected /> : <Ellipse />}
                </div>
              </div>

              <div
                style={
                  focusInput
                    ? { bottom: "calc(30% - 22px/2 + 50px)" }
                    : { bottom: "0" }
                }
                className="mx-8 absolute left-0 right-0 transition-all"
              >
                <button
                  disabled={!description}
                  className={`${
                    !description
                      ? "bg-custom-disable-blue"
                      : "bg-custom-active-blue"
                  } w-full not-italic font-normal text-lg leading-5 text-white h-12 rounded`}
                  onClick={() => updateCurrentTodo()}
                >
                  Save
                </button>

                <div className="mb-16 mt-8 flex justify-center">
                  <button
                    onClick={closeModal}
                    className="absolute w-16 h-5 not-italic font-normal text-lg leading-5 text-custom-active-blue"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {/* {focusInput && (
                <div className="absolute bottom-0 left-0 right-0">
                  <Keyboard />
                </div>
              )} */}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default UpdateTodoModal;
