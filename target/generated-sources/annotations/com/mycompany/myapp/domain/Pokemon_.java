package com.mycompany.myapp.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Pokemon.class)
public abstract class Pokemon_ {

	public static volatile SingularAttribute<Pokemon, String> name;
	public static volatile SingularAttribute<Pokemon, Integer> force;
	public static volatile SingularAttribute<Pokemon, Long> id;

	public static final String NAME = "name";
	public static final String FORCE = "force";
	public static final String ID = "id";

}

