import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeat,
  deselectSeat,
} from "../../../../reduxHilo/actions/bookingAction";
import { fetchSeatsByRoom } from "../../../../reduxHilo/actions/seatAction";
import { useColorModeValue } from "@chakra-ui/system";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import AddSeatForm from "./AddSeatForm";

export default function Banner({ roomId, rowNum, colNum }) {
  const dispatch = useDispatch();
  const { seats, loading, error } = useSelector((state) => state.seat);
  const selectedSeats = useSelector((state) => state.booking.selectedSeats);
  const {
    isOpen: isSeatModalOpen,
    onOpen: onSeatModalOpen,
    onClose: onSeatModalClose,
  } = useDisclosure();

  useEffect(() => {
    if (roomId) {
      dispatch(fetchSeatsByRoom(roomId));
    }
  }, [dispatch, roomId]);

  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("black", "white");
  const seatTextColor = useColorModeValue("black", "white");

  const isSelected = (seat) => {
    return selectedSeats.some((selectedSeat) => selectedSeat.name === seat?.name);
  };

  const handleSeatClick = (seat) => {
    if (isSelected(seat)) {
      dispatch(deselectSeat(seat));
    } else {
      dispatch(selectSeat(seat));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>{error}</p>
        <div className="flex justify-end mt-5">
        <Button
              bg="transparent"
              color="blue.500"
              border="1px solid"
              borderColor="blue.500"
              _hover={{ bg: "blue.500", color: "white" }}
              _active={{ bg: "blue.600", color: "white" }}
              borderRadius="md"
              boxShadow="md"
              px={6}
              py={3}
              w="full"
              onClick={onSeatModalOpen} // Mở modal khi nhấn vào nút Add Room
            >
              Add Room
            </Button>
        </div>
        <Modal isOpen={isSeatModalOpen} onClose={onSeatModalClose} size="xl">
          <ModalOverlay />
          <ModalContent maxW="90vw">
            <ModalHeader>Add New Seat</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddSeatForm roomId={roomId} rowNum={rowNum} colNum={colNum} onClose={onSeatModalClose}/>
            </ModalBody>
            <ModalFooter>
              {/* <button onClick={onSeatModalClose} className="px-4 py-2 rounded bg-blue-500 text-white">
                Close
              </button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }

  if (!seats || seats.length === 0) {
    return (
      <div
        className="md:px-6 py-4 px-2 rounded md:mb-8 w-full"
        style={{ backgroundColor: boxBg }}
      >
        <p className="text-center" style={{ color: "red" }}>
          Room này chưa có ghế, vui lòng thêm ghế
        </p>
        <div className="flex justify-end mt-5">
          <button
            className="px-4 py-2 rounded border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white transition duration-300 w-full"
            onClick={onSeatModalOpen}
          >
            Add Seat
          </button>
        </div>
        <Modal isOpen={isSeatModalOpen} onClose={onSeatModalClose} size="xl">
          <ModalOverlay />
          <ModalContent maxW="90vw">
            <ModalHeader>Add New Seat</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddSeatForm roomId={roomId} rowNum={rowNum} colNum={colNum} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }

  const seatLayout = Array.from({ length: rowNum || 0 }, () =>
    Array(colNum || 0).fill(null)
  );

  if (seatLayout.length > 0 && seatLayout[0].length > 0) {
    seats.forEach((seat) => {
      const rowIndex = seat.rowSeat - 1;
      const colIndex = seat.colSeat - 1;

      if (
        seatLayout[rowIndex] &&
        seatLayout[rowIndex][colIndex] !== undefined
      ) {
        seatLayout[rowIndex][colIndex] = seat;
      }
    });
  }

  return (
    <>
      <p className="text-s text-center" style={{ color: textColor }}>
        Màn hình
      </p>
      <div className="border-2 border-orange-500 mt-3"></div>
      <div
        className="md:px-6 py-4 px-2 rounded md:mb-8 w-full"
        style={{ backgroundColor: boxBg }}
      >
        <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
          <ul className="seat__layout-rows md:mb-8 w-auto grid grid-cols-1 items-center flex-auto text-o">
            {seatLayout.map((row, i) => {
              const rowLabel = String.fromCharCode(65 + i);
              return (
                <li
                  key={i}
                  className="flex justify-between mb-3 md:gap-0 gap-1 flex-nowrap"
                >
                  <div
                    className="text-sm font-semibold flex-none w-5 text-left"
                    style={{ color: textColor }}
                  >
                    {rowLabel}
                  </div>
                  <div className="flex md:gap-2 gap-1 grow justify-center min-w-[398px] flex-1">
                    {row.map((seat, colIndex) => {
                      if (!seat) {
                        return (
                          <div
                            key={colIndex}
                            className="md:h-8 h-6 border rounded md:text-s text-[10px] md:w-8 w-6 shadow-sm"
                          ></div>
                        );
                      }

                      const isInvisible = seat?.status === "invisible";
                      const isDisavailable = seat?.status === "disavailable";

                      let seatClass =
                        "border-gray-400 hover:bg-green-100 hover:border-green-500";
                      if (seat.type === "vip") {
                        seatClass =
                          "border-red-500 hover:bg-red-100 hover:border-red-500";
                      } else if (seat.type === "double") {
                        seatClass =
                          "border-blue-500 hover:bg-blue-100 hover:border-blue-500";
                      }

                      return (
                        <button
                          key={colIndex}
                          className={`md:h-8 h-6 border rounded md:text-s text-[10px] transition duration-300 ease-in-out ${
                            isInvisible
                              ? "invisible"
                              : isDisavailable
                              ? "bg-gray-300 border-gray-300"
                              : isSelected(seat)
                              ? "text-white bg-green-500 border-green-500"
                              : seatClass
                          } md:w-8 w-6 shadow-sm`}
                          disabled={isDisavailable}
                          onClick={() => handleSeatClick(seat)}
                        >
                          {!isInvisible && (
                            <span
                              className={`inline-block md:w-8 w-6 text-center`}
                              style={{
                                color: isSelected(seat)
                                  ? "white"
                                  : seatTextColor,
                              }}
                            >
                              {seat.name || `${rowLabel}${colIndex + 1}`}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <div
                    className="text-sm font-semibold flex-none w-5 text-right"
                    style={{ color: textColor }}
                  >
                    {rowLabel}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-end gap-5">
          <Button
            variant="outline"
            colorScheme="red"
            size="sm"
            leftIcon={<span className="w-5 h-5 bg-red-500 inline-block rounded-full"></span>}
          >
            Ghế VIP
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            size="sm"
            leftIcon={<span className="w-5 h-5 bg-blue-500 inline-block rounded-full"></span>}
          >
            Ghế đôi
          </Button>
        </div>
      </div>

      {/* Modal for AddSeatForm */}
      <Modal isOpen={isSeatModalOpen} onClose={onSeatModalClose} size="xl">
        <ModalOverlay />
        <ModalContent maxW="90vw">
          <ModalHeader>Add New Seat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddSeatForm roomId={roomId} rowNum={rowNum} colNum={colNum} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
