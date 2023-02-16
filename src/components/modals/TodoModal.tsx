import CloseBtn from "@/assets/CloseBtn";
import Ellipse from "@/assets/Ellipse";
import EllipseSelected from "@/assets/EllipseSelected";
import HorizontalLine from "@/assets/HorizontalLine";
import Keyboard from "@/assets/Keyboard";
import Pin from "@/assets/Pin";
import Quote from "@/assets/Quote";
import { useTodoContext } from "@/context";
import React, { useState } from "react";
import Sheet from "react-modal-sheet";
import styles from "../../styles/Modal.module.css";

type Props = {
  isOpen: boolean;
  setOpen: any;
  saveTodo: any;
};

const TodoModal = (props: Props) => {
  const { isOpen, setOpen, saveTodo } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [description, setDesription] = useState<string>("");
  const [focusInput, setFocusInput] = useState(false);

  const closeModal = () => {
    setDesription("");
    setIsChecked(false);
    setOpen(false);
  };

  const addTodo = () => {
    let values = {
      id: Math.floor(Math.random() * 99999),
      completed: false,
      pinned: isChecked,
      description: description,
    };

    saveTodo(values);
    setOpen(false);
    setDesription("");
    setIsChecked(false);
  };

  return (
    <>
      <Sheet isOpen={isOpen} onClose={closeModal} detent="content-height">
        <Sheet.Container style={{ height: "642px" }}>
          {/* <Sheet.Backdrop
            style={{ backgroundColor: "transparent" }}
            onTap={() => setOpen(false)}
          /> */}
          <Sheet.Header>
            <div
              className={`${styles.modalHeader} my-4 left-0 right-0 flex items-center justify-center`}
            >
              <Quote color="orange" />
              <p
                style={{ color: "rgba(255, 121, 100, 1)" }}
                className={`mx-3 h-5 not-italic font-semibold text-lg leading-5 text-center`}
              >
                Add a task
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
                  onChange={(e) => setDesription(e.target.value)}
                  placeholder="Task description"
                  style={{ gap: "17px", border: "1.5px solid #999C9F" }}
                  className={`flex box-border items-start h-12 bg-white rounded p-4 w-full outline-none`}
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
                  // focusInput
                  //   ? { top: "calc(30% - 22px/2 + 63px)" }
                  //   :
                  { bottom: "0" }
                }
                className={`mx-8 absolute left-0 right-0`}
              >
                <button
                  disabled={!description}
                  style={{
                    letterSpacing: "-0.015em",
                    background: !description
                      ? "rgba(33, 167, 249, 0.6)"
                      : "#21A7F9",
                  }}
                  className="w-full not-italic font-normal text-lg leading-5 text-white h-12 rounded"
                  onClick={() => addTodo()}
                >
                  Save
                </button>

                <div className="mb-16 mt-8 flex justify-center">
                  <button
                    onClick={closeModal}
                    style={{ letterSpacing: "-0.015em" }}
                    className="absolute w-16 h-5 not-italic font-normal text-lg leading-5 text-blue-500"
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

export default TodoModal;
