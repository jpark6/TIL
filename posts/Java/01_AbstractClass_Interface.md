--- 
title: 인터페이스와 추상클래스

---

# 인터페이스와 추상클래스  

## 인터페이스(Interface)

  자바에서 클래스들이 구현해야 하는 동작을 지정하는데 사용되는 추상 자료형  
  `interface` 키워드를 통해 선언한다.  
  `implements` 키워드를 통해 클래스에서 상속받아 사용한다.  
  `extends` 키워드를 통해 인터페이스에서 상속받아 사용한다.  
  - (인터페이스에서 인터페이스 상속 가능)  

  클래스와 달리 다중 상속이 가능하다.  
  인터페이스는 상수, 추상 메서드, default 메서드, static 메서드만 가질 수 있다.  
  (Java8에서 default메서드와 static 메서드가 추가되었다.)  

  |종류|기능|
  |---|---|
  |상수|인터페이스에서 정해진 값 사용|
  |추상 메서드|메서드 이름만 제공하고, 오버라이딩해서 구현.|
  |(Java8+)default 메서드|인터페이스에 구현되어있지만, 오버라이딩도 가능.|
  |(Java8+)static 메서드|인터페이스에 구현된 메서드 사용.|


  메서드는 `public abstract`이어야 하며 생략 가능하다.  
  상수는 `public static final`이어야 하며 생략 가능하다.  

  ```java
  interface InterfaceA {
    String NAME_A = "InterfaceA"; // 상수
    void methodA(); // 추상 메서드
    // deault 메서드 Overriding 가능
    default void defaultMethod() {
      System.out.println("Default Method");
    }
  }
  interface InterfaceB {
    String NAME_B ="InterfaceB"; // 상수
    void methodB(); // 추상 메서드
    // static 메서드 Overriding 불가능
    static void staticMethod() {
      System.out.println("Static Method");
    }

  // interface 다중 상속.
  interface InterfaceC extends InterfaceA, InterfaceB {
    @Override
    void defaultMethod(); // default 메서드를 다시 추상 메서드로 만듬.
  }
  public class MainClass implements InterfaceC {
    @Override
    public void methodA() {
      System.out.println("methodA");
    }
    @Override
    public void methodB() {
      System.out.println("methodB");
    }

    // default 메서드 Overriding
    @Override
    public void defaultMethod() {
      System.out.println("DefaultMethod Can Override!");
    }

    public static void main(String args[]) {
      InterfaceC mainClass = new MainClass();
      System.out.println(mainClass.NAME_A);
      System.out.println(mainClass.NAME_B);
      mainClass.methodA();
      mainClass.methodB();
      mainClass.defaultMethod();
      InterfaceB.staticMethod();
    }
  }
  ```

  ```output
  InterfaceA
  InterfaceB
  methodA
  methodB
  DefaultMethod Can Override!
  Static Method
  ```

  하나의 인터페이스 여러 클래스에서 사용
  ```java
  interface Animal {
    public void eat();
    public void sound();
  }

  class Cat implements Animal {
    @Override
    public void eat() {
      System.out.println("Eat Fish!");
    }
    @Override
    public void sound() {
      System.out.println("Meow~");
    }
  }

  class Dog implements Animal {
    @Override
    public void eat() {
      System.out.println("Eat Everything Except Chocolate!");
    }
    @Override
    public void sound() {
      System.out.println("Bark!");
    }
  }

    public class AnimalClass {
      public static void main(String[] args) {
        Animal animal = new Dog();
        animal.eat();
        animal.sound();

        animal = new Cat();
        animal.eat();
        animal.sound();
      }
    }
  }
  ```

## 추상 클래스 (Abstract Class)  

  추상 클래스는 interface와 class의 혼종 같은 느낌이다.  
  추상 클래스의 경우, 추상 메서드와 일반 매서드 모두 사용 가능하다.
  추상 클래스에 추상 메서드가 없어도 된다.(이럴꺼면 그냥 클래스를 쓰자.)
  아까의 Animal 인터페이스를 추상 클래스로 바꿔보자.

  ```Java
  abstract class Animal {
    // 추상 메서드
    public abstract void eat();
    // 일반 메서드
    public void sleep() {
      System.out.println("zzz");
    };
  }

  class Cat extends Animal {
    @Override
    public void eat() {
      System.out.println("Eat Fish!");
    }
  }

  class Dog extends Animal {
    @Override
    public void eat() {
      System.out.println("Eat Everything Except Chocolaet!");
    }
  }

  public class AnimalAbstract {
    public static void main(String[] args) {
      Animal animal = new Dog();
      animal.eat();
      animal.sleep();
      animal = new Cat();
      animal.eat();
      animal.sleep();
    }
  }
  ```

## 인터페이스 vs 추상클래스

  Java8에 default 메서드의 등장으로 인터페이스에서도 메서드 구현이 가능해졌다.  
  추상클래스를 사용해야하는 이유를 찾아보면 상속을 강제하기 위함이라고 하는데  
  인터페이스에서도 메서드 구현 및 abstract가 모두 가능하므로 위의 이유는 더 이상 유효하지 않은 것 같다.
  다만, 추상클래스는 변수를 사용할 수 있고 private, protected 접근제한자도 사용할 수 있으며 생성자가 있다.  
  상황에 맞게 적절히 사용하는 것이 바람직할 것 같다.
  
## 참고자료

> [TCP SCHOOL: 인터페이스](https://tcpschool.com/java/java_polymorphism_interface)  
> [Wiki: 인터페이스_(자바)](https://ko.wikipedia.org/wiki/인터페이스_(자바)))  
> [점프투자바: 05-6 인터페이스](https://wikidocs.net/217)  
> [점프투자바: 05-6 추상클래스](https://wikidocs.net/219)  
> [Java8 - Default Method](https://boxfoxs.tistory.com/359)  