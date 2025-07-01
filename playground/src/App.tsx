import { Button, Dropdown, Input, Toast } from "../../src/index";
import { useState } from "react";

const DROPDOWN_ITEMS = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
];

const ComponentShowcase = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState<any>(null);
  const [toastState, setToastState] = useState({
    isOpen: false,
    title: "",
    description: "",
    leftIcon: undefined as any,
    toastingTime: 3000,
  });

  const handleToastDemo = () => {
    setToastState({
      isOpen: true,
      title: "성공!",
      description: "디자인 시스템이 정상적으로 작동합니다.",
      leftIcon: "success",
      toastingTime: 3000,
    });
  };

  const closeToast = () => {
    setToastState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            🎨 Hodoo Design System
          </h1>
          <p className="text-xl text-gray-600">
            컴포넌트를 실시간으로 테스트하고 개발하세요
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Button 섹션 */}
          <section className="p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">버튼</h2>
            <div className="space-y-4">
              <Button color="black" size="lg" label="Primary 버튼" />
              <Button color="blue" size="md" label="Blue 버튼" />
              <Button color="white_line" size="sm" label="Outline 버튼" />
              <Button color="gray" label="Gray 버튼" disabled />
            </div>
          </section>

          {/* Input 섹션 */}
          <section className="p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              입력 필드
            </h2>
            <div className="space-y-4">
              <Input
                label="기본 입력"
                placeholder="텍스트를 입력하세요"
                value={inputValue}
                onChange={setInputValue}
              />
              <Input
                label="필수 입력"
                placeholder="필수 입력 필드"
                value=""
                onChange={() => {}}
                required
              />
              <Input
                label="에러 상태"
                placeholder="에러가 있는 입력"
                value=""
                onChange={() => {}}
                error="올바른 형식이 아닙니다"
              />
            </div>
          </section>

          {/* Dropdown 섹션 */}
          <section className="p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              드롭다운
            </h2>
            <div className="space-y-4">
              <p className="mb-4 text-sm text-gray-600">
                💡 <strong>테스트 기능:</strong>
                <br />
                • 외부 클릭 시 드롭다운 자동 닫힘
                <br />• 하나의 드롭다운만 열림 (다른 것 클릭 시 기존 것 자동
                닫힘)
              </p>
              <div className="flex flex-wrap gap-4">
                <Dropdown
                  isOpen={dropdownOpen}
                  list={DROPDOWN_ITEMS}
                  width={200}
                  height={150}
                  onSelect={(value, label) => {
                    setSelectedValue(label || value);
                    setDropdownOpen(false);
                  }}
                  onOpen={setDropdownOpen}
                >
                  <Button
                    color="white_line"
                    label={selectedValue || "첫 번째 드롭다운 ▼"}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />
                </Dropdown>
                {selectedValue && (
                  <p className="text-sm text-gray-600">
                    선택된 값: {selectedValue}
                  </p>
                )}
                <Dropdown
                  isOpen={dropdownOpen2}
                  list={DROPDOWN_ITEMS}
                  width={200}
                  height={150}
                  onSelect={(value, label) => {
                    setSelectedValue(label || value);
                    setDropdownOpen(false);
                  }}
                  onOpen={setDropdownOpen2}
                >
                  <Button
                    color="white_line"
                    label={selectedValue || "두 번째 드롭다운 ▼"}
                    onClick={() => setDropdownOpen2(!dropdownOpen2)}
                  />
                </Dropdown>
                {selectedValue && (
                  <p className="text-sm text-gray-600">
                    선택된 값: {selectedValue}
                  </p>
                )}
                <Dropdown
                  isOpen={dropdownOpen3}
                  list={DROPDOWN_ITEMS}
                  width={200}
                  height={150}
                  onSelect={(value, label) => {
                    setSelectedValue(label || value);
                    setDropdownOpen(false);
                  }}
                  onOpen={setDropdownOpen3}
                >
                  <Button
                    color="white_line"
                    label={selectedValue || "세 번째 드롭다운 ▼"}
                    onClick={() => setDropdownOpen3(!dropdownOpen3)}
                  />
                </Dropdown>
                {selectedValue && (
                  <p className="text-sm text-gray-600">
                    선택된 값: {selectedValue}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Toast 섹션 */}
          <section className="p-6 bg-white rounded-lg border shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              토스트
            </h2>
            <div className="space-y-4">
              <Button
                color="blue"
                label="토스트 메시지 표시"
                onClick={handleToastDemo}
              />
              <p className="text-sm text-gray-600">
                버튼을 클릭하면 토스트 메시지가 표시됩니다
              </p>
            </div>
          </section>

          {/* 위치 자동 조정 테스트 */}
          {/* <section className="p-6 bg-white rounded-lg border shadow-sm md:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              위치 자동 조정 테스트
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              💡 화면 하단(70% 이하)에서 드롭다운을 열면 자동으로 위쪽에
              표시됩니다.
            </p>
            <div className="flex justify-between items-end mt-16">
              <Dropdown
                isOpen={dropdownOpen}
                list={DROPDOWN_ITEMS}
                width={200}
                height={150}
                position="left"
                onSelect={(value, label) => {
                  setSelectedValue(label || value);
                  setDropdownOpen(false);
                }}
                onOpen={setDropdownOpen}
              >
                <Button
                  color="blue"
                  label="하단 Left 드롭다운 ▲"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              </Dropdown>

              <Dropdown
                isOpen={dropdownOpen2}
                list={DROPDOWN_ITEMS}
                width={200}
                height={150}
                position="right"
                onSelect={(value, label) => {
                  setSelectedValue(label || value);
                  setDropdownOpen2(false);
                }}
                onOpen={setDropdownOpen2}
              >
                <Button
                  color="white_line"
                  label="하단 Right 드롭다운 ▲"
                  onClick={() => setDropdownOpen2(!dropdownOpen2)}
                />
              </Dropdown>
            </div>
          </section> */}

          {/* 개발 정보 */}
          <section className="p-6 bg-white rounded-lg border shadow-sm md:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              개발 정보
            </h2>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
              <div>
                <h3 className="font-medium text-gray-700">현재 값들</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Input: {inputValue || "(비어있음)"}</li>
                  <li>Dropdown: {selectedValue || "(선택안됨)"}</li>
                  <li>Date: {dateValue ? "Selected" : "(선택안됨)"}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">개발 팁</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• 실시간으로 컴포넌트 수정 가능</li>
                  <li>• Hot reload 지원</li>
                  <li>• TypeScript 타입 체크</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">빌드 정보</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Vite 기반</li>
                  <li>• Tailwind CSS</li>
                  <li>• React 18</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {toastState.isOpen && (
        <Toast toastState={toastState} closeToast={closeToast} />
      )}
    </div>
  );
};

function App() {
  return <ComponentShowcase />;
}

export default App;
